import React from 'react';
import img from '../../gta.png';
import CustomHook from '../customHook/Hook';
import Card from './Card';


const Home = () => {
    const [data ,setData] = CustomHook()
    return (
        <div>
            <div className='grid grid-cols-2 ml-4 mr-4'>
                <div className='m-10'>
                    <h1 className='text-6xl font-extrabold'>This is gta store</h1>
                    <h1 className='text-6xl font-extrabold text-blue-600'>The best online game </h1>
                    <p className='mt-3 font-sans text-3xl'>The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centred on the heist sequences,
                    </p>
                    <button className='bg-purple-200 rounded-md mt-3 hover:bg-purple-400 p-5 font-bold '>Buy Online</button>
                </div>
                <div>
                    <img className='ml-56 max-h-96 m-10' src={img} alt="gta" />
                </div>
            </div>
            {/* customer reveq */}
            <div>
                <h1 className='text-4xl font-medium text-center'>Customer revew</h1>
                <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                    {
                        data.slice(0,3).map(user =><Card key={user.id}
                            user={user}
                        ></Card>)
                    }
                </div>
                <button className='flex items-center bg-blue-300 rounded-xl py-2 px-10'>See all reviews</button>
            </div>
        </div>
    );
};

export default Home;