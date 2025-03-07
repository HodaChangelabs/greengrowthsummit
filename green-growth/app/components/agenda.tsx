'use client'

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image'
import { karla, karlaBold ,karlaExtraBold} from './fonts';
import { agendaTunis } from '@/app/data/agenda-tunis'
import { agendaEgypt } from '../data/agenda-egypt';
import { TracksData } from '@/app/data/tracks'

type Props =  {
  country: string
}

const Agenda = ({
  country,
}: Props
) => {
  return (
    <div className='lg:px-10 pt-5'>
        {
          /**conditional rendereing for each country */
          country === "Tunisia" 
          ?         
          <div className="flex flex-col md:h-[1000px]  xl:h-[875px] max-h-full md:flex-wrap lg:gap-x-5 2xl:gap-x-16 w-full md:w-[420px] xl:w-[600px] 2xl:w-[700px] ">
          {agendaTunis[0].events.map((item, index) => {
            return(
              <div  className="flex flex-row items-start mb-5" key={index}>
                <div className='lg:m-0 text-[16px] w-[50px] md:w-[45px] mb-2 lg:mb-0 lg:w-[75px] whitespace-nowrap'>
                    {/**map.time  */}
                    <div className={`${karlaBold.className} pt-5 text-green-600`}>{item.from}</div>
                    <div className='w-[35%] lg:w-[40%] rounded-full h-[2px] bg-red-300'></div>
                </div>
                <div className="w-full md:w-[60%] lg:w-full relative flex  justify-start">
                    <div className='h-10 w-full md:w-full xl:w-[70%] 2xl:w-[90%] blur-md absolute shadow-lg shadow-blue-400	'></div>
                    <div className="z-10 bg-white rounded-[16px] p-5 border-2 w-full md:w-full xl:w-[70%] 2xl:w-[90%]">
                        {/* event details. map  */}
                        <div className='flex lg:flex-row flex-col justify-between mb-0 '>
                            {/**agenda event title */}
                            {/**Check if its a panel, add the color of track */}
                            {item.panelcolor ? 
                              <div className='flex gap-2 p-1 items-start' key={index} >
                                <div className='w-[8px] h-[8px] rounded-full mt-2' 
                                  style={{
                                    backgroundColor: item.panelcolor,
                                }}></div>
                                <p className={`${karlaExtraBold.className} font-bold text-[15px] text-green-600`}> {item.title}</p>
                              </div>
                            :
                              <div className= {`${karlaExtraBold.className} font-bold text-[15px] text-green-600`}>{item.title}</div>
                            }
                        </div>
                        {item.event?.map((i, index) => (
                            <div className='flex gap-2 p-1 items-start' key={index} >
                                {/**<a href='/sessions' target=""><p className={`${karla.className} hover:text-blue-500 text-blue-400 `}>Book your sessions here</p></a>**/}
                                <div className='w-[8px] h-[8px] rounded-full mt-2'
                                  style={{
                                    backgroundColor: i.color,
                                }}></div>
                                <p className={`${karla.className}  w-full text-[14px]`}> {i.details}</p>
                            </div>
                        ))}
                        <div className='flex flex-col gap-2'>
                          {item.info?.map((i, index) => (
                              <div className='p-1' key={index} >
                                <p className={`${karla.className} w-full text-[14px] text-left]`}> {i.info}</p>
                              </div>
                          ))}
                        </div>
                      </div>
                </div>
              </div>   
            );
          })}
        </div>
        /** if country is egypt return agenda mapped in egypt */
          : 
          <div className="flex flex-col md:h-[990px] lg:h-[1090px] xl:h-[995px] max-h-full md:flex-wrap lg:gap-x-5 2xl:gap-x-16 w-full md:w-[420px] xl:w-[600px] 2xl:w-[700px] ">
          {agendaEgypt[0].events.map((item, index) => {
            return(
              <div  className="flex flex-row items-start mb-5" key={index}>
                <div className='lg:m-0 text-[16px] w-[50px] md:w-[45px] mb-2 lg:mb-0 lg:w-[75px] whitespace-nowrap'>
                    {/**map.time  */}
                    <div className={`${karlaBold.className} pt-5 text-green-600`}>{item.from}</div>
                    <div className='w-[35%] lg:w-[40%] rounded-full h-[2px] bg-red-300'></div>
                </div>
                <div className="w-full md:w-[60%] lg:w-full relative flex items-center justify-start">
                    <div className='h-10 w-full md:w-full xl:w-[70%] 2xl:w-[90%] blur-md absolute shadow-lg shadow-blue-400	'></div>
                    <div className="z-10 bg-white rounded-[16px] p-5 border-2 w-full md:w-full xl:w-[70%] 2xl:w-[90%]">
                        {/* event details. map  */}
                        <div className='flex lg:flex-row flex-col justify-between mb-0 '>
                            {/**agenda event title */}
                            {item.panelcolor ? 
                              <div className='flex gap-2 p-1 items-start' key={index} >
                                <div className='w-[8px] h-[8px] rounded-full mt-2' 
                                  style={{
                                    backgroundColor: item.panelcolor,
                                }}></div>
                                <p className={`${karlaExtraBold.className} font-bold text-[15px] text-green-600`}> {item.title}</p>
                              </div>
                            :
                              <div className= {`${karlaExtraBold.className} font-bold  text-[15px] text-green-600`}>{item.title}</div>
                            }
                        </div>
                        {item.event?.map((i, index) => (
                            <div className='flex gap-2 p-1 items-center' key={index} >
                                {/**<a href='/sessions' target=""><p className={`${karla.className} hover:text-blue-500 text-blue-400 `}>Book your sessions here</p></a>**/}
                                <div className='w-[8px] h-[8px] rounded-full mt-2'
                                  style={{
                                    backgroundColor: i.color,
                                }}></div>
                                <p className={`${karla.className}  w-full text-[14px]`}> {i.details}</p>
                            </div>
                        ))}
                        <div className='flex flex-col gap-2'>
                          {item.info?.map((i, index) => (
                              <div className='p-1' key={index} >
                                <p className={`${karla.className} w-full text-[14px] text-left] whitespace-pre-line`}> {i.info}</p>
                              </div>
                          ))}
                        </div>
                      </div>
                </div>
              </div>   
            );
          })}
        </div>
        }
      {/**Track colors*/}
      <div className = 'flex justify-start  md:justify-center gap-5 items-center flex-wrap pt-10'>
        {TracksData.map((track, index) => (
            <div className='flex gap-2 p-1 items-center justify-center' key={index} >
                {/**<a href='/sessions' target=""><p className={`${karla.className} hover:text-blue-500 text-blue-400 `}>Book your sessions here</p></a>**/}
                <div className='w-[8px] h-[8px] rounded-full'
                  style={{
                    backgroundColor: track.color,
                }}></div>
                <p className={`${karlaBold.className}  w-full text-[14px]`}> {track.title} Track</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
