import React from 'react'
import { MenuComponent } from '../home/_components/menu'
import ButtonComponent from '@/app/_components/button'

const MenusList = () => {
    const data = [
        {
            id: 1,
            image: "/food1.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        },

        {
            id: 2,
            image: "/food2.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        },
        {
            id: 3,
            image: "/food2.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        },
        {
            id: 4,
            image: "/food1.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        },
        {
            id: 5,
            image: "/food1.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        },
        {
            id: 6,
            image: "/food1.png",
            title: "Chicken",
            description: "This is a delicious to find in rarel pale at first'",
            price: "2000"
        }
    ]

    const filterText = ["Snack", "Bakery", "Chicken", "handBurger", "Rice", "Nigerian Jollof Rice", "Chicken Rick"]
    return (
        <div className='w-[90%] mx-auto py-4'>
            <div className='flex gap-10 py-4 shadow-sm'>
                {
                    filterText.map((item, index) => (
                        <div key={index}>
                            <ButtonComponent size="large">
                                {item}
                            </ButtonComponent>
                        </div>

                    ))
                }
            </div>

            <div className=' grid grid-cols-5 gap-4 py-3 '>

                {
                    data.map((item) => (
                        <div key={item.id}>
                            <MenuComponent img={item.image} title='Chicken' description={item.description} price={item.price} />
                        </div>

                    ))
                };

            </div>
        </div>
    )
}

export default MenusList