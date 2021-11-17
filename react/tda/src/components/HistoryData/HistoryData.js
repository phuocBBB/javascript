import { Fragment, useEffect, useState } from "react";

const tdaclient = require('tda-api-client');



const HistoryData = () => {
    const [priceHistoryResult, setPriceHistoryResult] = useState();
    // let priceHistoryResult = null;

    const priceHistoryConfig = {
        startDate: new Date('2021-11-01 07:00:00').getTime(),
        endDate: new Date('2021-11-12 16:00:00').getTime(),
        periodType: tdaclient.pricehistory.PERIOD_TYPE.YEAR,
        frequencyType: tdaclient.pricehistory.FREQUENCY_TYPE.YEAR.WEEKLY,
        frequency: tdaclient.pricehistory.FREQUENCY.WEEKLY.ONE,
        symbol: 'AAPL',
        getExtendedHours: 'true',
        apikey: 'ZSQ7BKUCSHAKS8RPNJHF7AMYIJHATMAZ'
    };



    useEffect(() => {
        setTimeout( async () => {
            const result = await tdaclient.pricehistory.getPriceHistory(priceHistoryConfig);
            console.log(result);
            // setPriceHistoryResult(result);

        }, 2000);

        
    }, [priceHistoryResult]);


    const onCLickHandler = () => {
        console.log(priceHistoryResult);
    };

    return <Fragment>
        <div>Hello</div>
        <button onClick={onCLickHandler}>Price History</button>
    </Fragment>
};

export default HistoryData;