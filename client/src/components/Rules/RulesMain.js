import React from 'react';
import RulesData  from './RulesData';
import Card from './Card';

const RulesMain = () => {


    const data  = RulesData.map((data,index) => { console.log(data);return  (<Card key={index} className={ index%2 === 0 ? "  bg-redstone text-white" : "bg-bluestone text-white" } header={data.header} title={data.title} content={data.content} />)})

    return (

        <div className="RulesMain_main ">
            <div className="container ">
                <h3 className="display-4 text-center text-dark text">Know Your Rights!</h3>
                <div className="card-columns" >
                    {data}
                </div>
            </div>
        </div>

    );
};

export default RulesMain;