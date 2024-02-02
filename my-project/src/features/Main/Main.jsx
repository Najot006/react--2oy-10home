import React from 'react'
import { useGetMainQuery } from './MainSlice'

export default function Main() {
    const {data: main} = useGetMainQuery()
    console.log(main, "main");
  return (
    <div className='main'>
      {
        main?.map((item,index) =>{
          return <main className='mainc' key={index}>
            <h1 className='main_t'>{item.main_t}</h1>
            <h1 className='main_t2'>{item.main_t2}</h1>
          <div className='animal_usha'>
          <div className='colleksya'>
            <img className='dog' src={item.main_img1} alt="" />
            <div className='animal_left'>
              <img className='cat' src={item.main_img3} alt="" />
              <img className='cat' src={item.main_img2} alt="" />
              <img className='cat' src={item.main_img3} alt="" />
            </div>
            <h1 className='collek'>Collection Name</h1>
            <div className="asus">
                  <img className="achki" src={item.main_img2} alt="" />
                  <h5 className="asil">Javohir</h5>
                </div>
            </div>
            <div className='colleksya'>
            <img className='dog' src={item.main_img1} alt="" />
            <div className='animal_left'>
              <img className='cat' src={item.main_img3} alt="" />
              <img className='cat' src={item.main_img2} alt="" />
              <img className='cat' src={item.main_img3} alt="" />
            </div>
            <h1 className='collek'>Collection Name</h1>
            <div className="asus">
                  <img className="achki" src={item.main_img2} alt="" />
                  <h5 className="asil">Javohir</h5>
                </div>
            </div>
            <div className='colleksya'>
            <img className='dog' src={item.main_img1} alt="" />
            <div className='animal_left'>
              <img className='cat' src={item.main_img3} alt="" />
              <img className='cat' src={item.main_img2} alt="" />
              <img className='cat' src={item.main_img3} alt="" />
            </div>
            <h1 className='collek'>Collection Name</h1>
            <div className="asus">
                  <img className="achki" src={item.main_img2} alt="" />
                  <h5 className="asil">Javohir</h5>
                </div>
            </div>
          </div>

          {/* 2-qisim */}

          <div className='item'>
            <h1 className='main2'>{item.main_t3}</h1>
            <div className='redmi'>
              <p className='main_p'>{item.main_t4}</p>
              <button className='mani_btn'>{item.main_btn}</button>
            </div>
          <div className='pro'>
          <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
          </div>
          <div className='pro'>
          <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
          </div>
          <div className='pro'>
          <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
            <div className='kenneyi'>
              <img className='uka' src={item.main_link1}/>
              <h1 className='ll'>Klyaptra</h1>
              <div className='day'>
                <h2 className='total'>Total Sales:</h2>
                <h3>34.53 ETH</h3>
              </div>
            </div>
          </div>
          </div>

          {/* 3-qisim */}

          <div className='third'>
            <div>
              <h1 className='main5'>{item.main_t5}</h1>
            <div className="flew">
            <div>
                <img src={item.main_link2} alt="" />
                <div className='pela'>
                  <h1 className='d-flex'>Art</h1>
                </div>
              </div>
              <div>
                <img src={item.main_link2} alt="" />
                <div className='pela'>
                  <h1 className='d-flex'>Art</h1>
                </div>
              </div>
              <div>
                <img src={item.main_link2} alt="" />
                <div className='pela'>
                  <h1 className='d-flex'>Art</h1>
                </div>
              </div>
              <div>
                <img src={item.main_link2} alt="" />
                <div className='pela'>
                  <h1 className='d-flex'>Art</h1>
                </div>
              </div>
            </div>
            <div className="flew">
            <div>
                <img src={item.main_link2} alt="" />
                <div className='pela'>
                  <h1 className='d-flex'>Art</h1>
                </div>
              </div>
              <div>
                <img src={item.main_link2} alt="" />
                <div className='pela'>
                  <h1 className='d-flex'>Art</h1>
                </div>
              </div>
              <div>
                <img src={item.main_link2} alt="" />
                <div className='pela'>
                  <h1 className='d-flex'>Art</h1>
                </div>
              </div>
              <div>
                <img src={item.main_link2} alt="" />
                <div className='pela'>
                  <h1 className='d-flex'>Art</h1>
                </div>
              </div>
            </div>
            </div>
          </div>

          </main>
        })
      }
    </div>
  )
}
