import './PlansCard.css'
import { PiStackSimple } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import React, { Component } from 'react';

import { StackSimple, Stack, StackPlus } from '@phosphor-icons/react';
const PlansCard = ( { plan }) => {

    const getStackIcon = () => {
        const icons = {
            Basic: StackSimple,
            Professional: Stack,
            Enterprises: StackPlus
        }
        return icons[plan.name] || StackSimple
    }

    return (
        <div className="plans-card__div outfit-normal">
            <div className="plans-card__header">
                <div className="plan-card__title">
                    {React.createElement(getStackIcon(), {size: 22})}
                    <p>{plan.name}</p>
                </div>

                <div className='plans-card__prices'>
                    <h1 className='plans-card__price'>
                    {isNaN(parseFloat(plan.price)) ? plan.price : `$${plan.price}`}
                        <span className='plans-card__price-period'>
                            {plan.price === 'Custom' ? '' : '/month'}
                        </span>
                    </h1>
                    <p className='plans-card__description'>{plan.description}</p>
                </div>

            </div>

            <div className='plans-card__button-wrapper'>
                <button className='plans-card__button'>{plan.buttonText} <MdArrowOutward size={16}/></button>
            </div>

            <div className='plan-card__benefits'>
                {plan.benefits.map((benefit, index) => (
                    <div key={index} className='plan-card__benefit'>
                        <FaCheck className='plan-card__benefit-icon'/>
                        <p>{benefit}</p>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default PlansCard;
