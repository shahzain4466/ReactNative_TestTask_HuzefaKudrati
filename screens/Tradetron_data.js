
const randomnum = () => Math.floor(Math.random() * (1000 - 1+ 1)+1 )

var Data_Detail = [

    {
        Title: 'GSA BNF Directional',
        Sub_title: 'Live-Entered',

        TradeValues: [
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
        ],
        Sub_total: 0,
    },

    {
        Title: 'GA Nifty Directional',
        Sub_title: 'Exited',

        TradeValues: [
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
        ],
        Sub_total: 0,
    },
    {
        Title: 'Banknifty Fighter Lite Positional',
        Sub_title: 'Live-Entered',

        TradeValues: [
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
            {
                Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                QTY: randomnum(),
                LTP: randomnum(),
                Val: randomnum(),
                PNL: randomnum(),

            },
        ],
        Sub_total: 0,
    },

]




function updateData() {
    // Generate new data
    function GetSubTotal(tradeValues) {
        let subtotal = 0;
        tradeValues.forEach((trade) => {
            if (typeof trade.PNL === 'number') {
                subtotal += trade.PNL;
            }
        });
        return parseFloat(subtotal).toFixed(3);
    }

    var newData = [

        {
            Title: 'GSA BNF Directional',
            Sub_title: 'Live-Entered',

            TradeValues: [
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),

                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
            ],
            Sub_total: randomnum()
        },
        {
            Title: 'GA Nifty Directional',
            Sub_title: 'Exited',

            TradeValues: [
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
            ],
            Sub_total: randomnum()
        },
        {
            Title: 'Banknifty Fighter Lite Positional',
            Sub_title: 'Live-Entered',

            TradeValues: [
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: randomnum(),

                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: randomnum(),

                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: randomnum(),

                },
            ],
            Sub_total: randomnum()
        },
        {
            Title: 'Banknift Fighter ',
            Sub_title: 'Live-Entered',

            TradeValues: [
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),

                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
            ],
            Sub_total: randomnum()
        },

        {
            Title: 'Overnight Miner',
            Sub_title: 'Exited',

            TradeValues: [
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),

                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
                {
                    Detail: 'OPTIDY BANKNIFTY 04MAY2023 C 45000',
                    QTY: randomnum(),
                    LTP: randomnum(),
                    Val: randomnum(),
                    PNL: Math.random() < 0.5 ? -randomnum() : randomnum(),


                },
            ],
            Sub_total: randomnum()
        },


    ]

    newData.forEach((data) => {
        data.Sub_total = GetSubTotal(data.TradeValues);
    });

    // Data_Detail = newData;
    return newData
};

// export default Data_Detail;
export { updateData };



