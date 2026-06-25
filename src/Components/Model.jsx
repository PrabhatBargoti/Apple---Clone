import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Modelview from './Modelview'
import { yellowImg } from '../utils'
import * as THREE from 'three'
import { View } from '@react-three/drei'

const Model = () => {
    const [size, setsize] = useState('small')
    const [model, setmodel] = useState({
        title: 'iPhone 15 Pro in Natural titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg, 
    })

    // Camera Control for Model View
    const CameraControlSmall = useRef();
    const CameraControlLarge = useRef();

    // Model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // Rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    useGSAP(()=>{
        gsap.to('#heading',{
            opacity: 1,
            y: 0
        })
    })

  return (
    <section className='common-padding'>
        <div className="screen-max-width">
            <div id="heading" className='section-heading'>Take a closer look.</div>
            <div className="flex flex-col item-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                     <Modelview
                        index={1}
                        groupRef={small}
                        gsapType='view1'
                        controlRef={CameraControlSmall}
                        setRotaionState={setSmallRotation}
                        item={model}
                        size={size} 
                    />

                    <Modelview
                        index={2}
                        groupRef={large}
                        gsapType='view2'
                        controlRef={CameraControlLarge}
                        setRotaionState={setLargeRotation}
                        item={model}
                        size={size} 
                    />

                    <Canvas className='w-full h-full' style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: 0, 
                        right: 0,
                        overflow: 'hidden'
                        }}
                        eventSource={document.getElementById('root')}
                    >
                        
                        <View.Port />
                    </Canvas>
                </div>
                <div className="mx-auto w-full">
                    <p>{model.title}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model
