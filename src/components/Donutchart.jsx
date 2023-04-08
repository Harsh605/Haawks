import React from 'react'
import Chart from 'react-apexcharts'
const Donutchart = () => {
  return (
    <div>
        <div style={{minHeight:"300px", minWidth:"300px"}}>
        <Chart 
        
        type='donut'
        height={"100%"}
        
        weight={"100%"}
        
        series={[40000000,70000000,100000000,50000000,140000000,150000000,300000000,50000000,25000000,5000000,20000000,50000000]}
        
        options={
                    {  
                        legend:{
                            show:false
                        },
            labels:["Seed","Public Sale","Private Sale","Marketing","Team","Strategic Funding","Ecosystem","Liquidity","Advisory","Exchange Listing","Partnership","Airdrop"],
            plotOptions:{
                pie:{
                    donut:{
                        labels:{
                            show:true,
                            value:{
                                color:'#ffffff'
                            },
                            total:{
                                show:true,
                                fontSize:20,
                            
                            }                        
                        }
                    }
                }
            }        
        }
                    
                }
        
        /></div>



    </div>
  )
}

export default Donutchart