const { SERVER_URL, API_ENDPOINT_EQUIPMENT, API_KEY } = require( "./constant");
const axios =require("axios");
const router = require('express').Router();

router.get('/get-all',async (req,res) =>{

    let lastItem;
    let itemTypes = {
        types:[],
        operational:0,
        nonOperational:0
    };
    let flag = true;

    while(flag){
        if(itemTypes.types.length == 0){
            let newdata = await getItems(0);
            itemTypes = sort(newdata,itemTypes);
            lastItem = newdata[newdata.length-1]; 
        }else{
            let newdata = await getItems(lastItem.__rowid__);

            if(newdata.length==0){
                flag=false;
            }else{
                itemTypes = sort(newdata,itemTypes);
                lastItem=newdata[newdata.length-1];  
            }
        }
    }
    res.send(itemTypes);
});

async function getItems(last){
    const resData = await axios.get(`${SERVER_URL}/${API_ENDPOINT_EQUIPMENT}/All?${API_KEY}&max=50&last=${last}`)
    .catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
    return resData.data;
}

function sort(newdata,itemTypes){
    newdata.forEach(item => {
                
        let isNewItem = true;

        itemTypes.types.forEach((type)=>{
            if(type.AssetCategoryKey == item.AssetCategoryKey){
                type.amount +=1;
                isNewItem = false;
            }
        });

        if(isNewItem){
            let newType = {
                "AssetCategoryKey":item.AssetCategoryKey,
                "AssetCategoryID":item.AssetCategoryID,
                "amount":1
            }

            itemTypes.types.push(newType);
        }

        if(item.OperationalStatus=="Operational"){
            itemTypes.operational += 1;
        }else{
            itemTypes.nonOperational += 1;
        }
    });
    return itemTypes;
}

module.exports=router;