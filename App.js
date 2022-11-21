import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet,useParams, useNavigate} from "react-router-dom"
import './App.css';

// import Map from './component/Map';
import {Map, MapMarker} from 'react-kakao-maps-sdk'; // 다운받은 패키지

export default App;

function M1(){
  // 인포윈도우 Open 여부를 저장하는 state 
  const [isOpen, setIsOpen] = useState(false)
  
  const positions = [
    {
      title: "1번,7번 (출구)",
      latlng: { lat: 37.4905, lng: 126.7244 },
    },
    {
      title: "5번,6번,14번 (출구)",
      latlng: { lat: 37.4907, lng: 126.7227 },
    },
    {
      title: "8번,10번 (출구)",
      latlng: { lat: 37.491, lng: 126.7244 },
    },
    {
      title: "11번 (출구)",
      latlng: { lat: 37.4912, lng: 126.7244 },
    },
    
    {
      title: "12번 (출구)",
      latlng: { lat: 37.4915, lng: 126.7244 },
    },

    {
      title: "15번 (출구)",
      latlng: { lat: 37.4912, lng: 126.7221 },
    },
  ]
  
  return (
    <Map // 지도를 표시할 Container
    center={{
      // 지도의 중심좌표
      lat: 37.4905,
      lng: 126.7244,
    }}
    style={{
      // 지도의 크기
      width: "100%",
      height: "500px",
    }}
    level={3} // 지도의 확대 레벨
    >
      {positions.map((position , index) => (
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
        key = {`${position.title}-${position.latlng}`}
        position = {position.latlng}
        image = {{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          size: {
            width: 24,
            height: 35
          },
        }}

        title={position.title}

        
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        onClick={() => setIsOpen(true)}
        >
        {isOpen && (
          <div style={{ minWidth: "150px" , padding: "5px", color: "#000" }}>
            <img
              alt="close"
              width="15"
              height="15"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            />
            <div style={{ padding: "5px", color: "#000" }}>경로</div>
            <a
              href="https://map.kakao.com/link/map/경로를 입력해주세요!,37.4905,126.7244"
              style={
                {
                  color: "red",
                  fontStyle: "italic",
                  textDecoration: "none",
                }
              }
              target="_blank"
              rel="noreferrer"
          >
              카카오맵
            </a>{" "}
          </div>
        )}
        
      </MapMarker>

))}
    </Map>
  )
}

function M2(){
  // 인포윈도우 Open 여부를 저장하는 state 
  const [isOpen, setIsOpen] = useState(false)

  const positions = [
    {
      title: "16번 (출구)",
      latlng: { lat: 37.4914, lng: 126.722 },
    },
    {
      title: "17번,18번 (출구)",
      latlng: { lat: 37.4914, lng: 126.7225 },
    },
    {
      title: "19번,25번 (출구)",
      latlng: { lat: 37.4922, lng: 126.7229 },
    },
    {
      title: "20번 (출구)",
      latlng: { lat: 37.4918, lng: 126.7242 },
    },
  ]


  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.4913,
        lng: 126.722,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "500px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {positions.map((position , index) => (
      <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
        key = {`${position.title}-${position.latlng}`}
        position = {position.latlng}

        image = {{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          size: {
            width: 24,
            height: 35
          },
        }}

        title={position.title}
        
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        onClick={() => setIsOpen(true)}
      >
        {isOpen && (
          <div style={{ minWidth: "150px" , padding: "5px", color: "#000" }}>
            <img
              alt="close"
              width="15"
              height="15"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            />
            <div style={{ padding: "5px", color: "#000" }}>경로</div>
            <a
              href="https://map.kakao.com/link/map/경로를 입력해주세요!,37.4913,126.722"
              style={
                      {
                        color: "red",
                        fontStyle: "italic",
                        textDecoration: "none",
                      }
                    }
              target="_blank"
              rel="noreferrer"
          >
              카카오맵
            </a>{" "}
          </div>
        )}
        
      </MapMarker>

      ))}
    </Map>
  )
}

function M3(){
  // 인포윈도우 Open 여부를 저장하는 state 
  const [isOpen, setIsOpen] = useState(false)

  const positions = [
    {
      title: "21번 (출구)",
      latlng: { lat: 37.4919, lng: 126.7238 },
    },
    {
      title: "23번 (출구)",
      latlng: { lat: 37.4926184, lng: 126.7233 },
    },
    {
      title: "26번 (출구)",
      latlng: { lat: 37.4928, lng: 126.7233 },
    },
    {
      title: "27번 (출구)",
      latlng: { lat: 37.4928, lng: 126.7228},
    },
  ]


  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.4919,
        lng: 126.7238,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "500px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {positions.map((position , index) => (
      <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
        key = {`${position.title}-${position.latlng}`}
        position = {position.latlng}

        image = {{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          size: {
            width: 24,
            height: 35
          },
        }}

        title={position.title}
        
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        onClick={() => setIsOpen(true)}
      >
        {isOpen && (
          <div style={{ minWidth: "150px" , padding: "5px", color: "#000" }}>
            <img
              alt="close"
              width="15"
              height="15"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            />
            <div style={{ padding: "5px", color: "#000" }}>경로</div>
            <a
              href="https://map.kakao.com/link/map/경로를 입력해주세요!,37.4919,126.7238 "
              style={
                      {
                        color: "red",
                        fontStyle: "italic",
                        textDecoration: "none",
                      }
                    }
              target="_blank"
              rel="noreferrer"
          >
              카카오맵
            </a>{" "}
          </div>
        )}
        
      </MapMarker>

      ))}
    </Map>
  )
}

function M4(){
  // 인포윈도우 Open 여부를 저장하는 state 
  const [isOpen, setIsOpen] = useState(false)

  const positions = [
    {
      title: "28번 (출구)",
      latlng: { lat: 37.4937, lng: 126.7231 },
    },
    {
      title: "29번 (출구)",
      latlng: { lat: 37.4937, lng: 126.7227 },
    },
    {
      title: "30번 (출구)",
      latlng: { lat: 37.4942, lng: 126.7230 },
    },
    {
      title: "31번 (출구)",
      latlng: { lat: 37.4942, lng: 126.7226 },
    },
  ]

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.4937,
        lng: 126.723,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "500px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {positions.map((position , index) => (
      <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
        key = {`${position.title}-${position.latlng}`}
        position = {position.latlng}

        image = {{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          size: {
            width: 24,
            height: 35
          },
        }}

        title={position.title}
        
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        onClick={() => setIsOpen(true)}
      >
        {isOpen && (
          <div style={{ minWidth: "150px" , padding: "5px", color: "#000" }}>
            <img
              alt="close"
              width="15"
              height="15"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            />
            <div style={{ padding: "5px", color: "#000" }}>경로</div>
            <a
              href="https://map.kakao.com/link/map/경로를 입력해주세요!,37.4937,126.723"
              style={
                      {
                        color: "red",
                        fontStyle: "italic",
                        textDecoration: "none",
                      }
                    }
              target="_blank"
              rel="noreferrer"
          >
              카카오맵
            </a>{" "}
          </div>
        )}
        
      </MapMarker>

      ))}
    </Map>
  )
}

function Home () {
  return (
    <>
    <h1 className='do'>부평에서 여기어때?</h1>
    <img src="./사진이지롱/여기어때 수정2.png" alt='여기어때' className='mo'/>
      <nav>
        <ul> 
          <li>
            <Link to="/posts">1~15번 출구에서 여기어때?</Link>
          </li>
          <li>
            <Link to="/postsc">16~20번 출구에서 여기어때?</Link>
          </li>
          <li>
            <Link to="/postsd">21~27번 출구에서 여기어때?</Link>
          </li>
          <li>
            <Link to="/postse">28~31번 출구에서 여기어때?</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Posts() {
  let navigate = useNavigate();
  return (
    <>
      <h1>1~15번</h1>
      <ul>
        <M1/>
        <li>
          <Link to="/post/1번 + 7번출구/롯데하이마트 주차장 1+7">1번 + 7번 출구</Link>
        </li>
        <li>
          <Link to="/post/5번  + 6번 + 14번 출구/역전지구대 5+6+14">5번 + 6번 + 14번 출구</Link>
        </li>
        <li>
          <Link to="/post/8번 +10번 출구/조개폭식 8+10">8번 + 10번 출구</Link>
        </li>
        <li>
          <Link to="/post/11번 출구/다이소 11">11번 출구</Link>
        </li>
        <li>
          <Link to="/post/12번 출구/설빙 12">12번 출구</Link>
        </li>
        <li>
          <Link to="/post/15번 출구/Gs 25 15">15번 출구</Link>
        </li>
        <li>
          <button onClick={() => navigate(- 1)}>뒤로가기</button>
        </li>
      </ul>
    </>  
  )
}


function Postsc() {
  let navigate = useNavigate();
  return (
    <>
      <h1>16~20번</h1>
      <ul>
        <M2/>
        <li>
          <Link to="/post/16번 출구/북인천우체국 16">16번 출구</Link>
        </li>
        <li>
          <Link to="/post/17번 + 18번 출구/OK저축은행 17+18">17번 + 18번 출구</Link>
        </li>
        <li>
          <Link to="/post/19번 + 25번 출구/세븐일레븐 19+25">19번 출구</Link>
        </li>
        <li>
          <Link to="/post/20번 출구/파리바게트 20">20번 출구</Link>
        </li>
        <li>
          <button onClick={() => navigate(- 1)}>뒤로가기</button>
        </li>
      </ul>
    </>  
  )
}

function Postsd() {
  let navigate = useNavigate();
  return (
    <>
      <h1>21~27번</h1>
      <ul>
        <M3/>
        <li>
          <Link to="/post/21번 출구/코리아IT 21">21번 출구</Link>
        </li>
        <li>
          <Link to="/post/23번 +24번 출구/고베규카츠 23+24">23번 + 24번 출구</Link>
        </li>
        <li>
          <Link to="/post/26번 출구/국민은행 26">26번 출구</Link>
        </li>
        <li>
          <Link to="/post/27번 출구/오리사냥 27">27번 출구</Link>
        </li>
        <li>
         <button onClick={() => navigate(- 1)}>뒤로가기</button>
        </li>
      </ul>
    </>  
  )
}

function Postse() {
  let navigate = useNavigate();
  return (
    <>
      <h1>28~31번</h1>
      <ul>
        <M4/>
        <li>
          <Link to="/post/28번 출구/인생네컷 28">28번 출구</Link>
        </li>
        <li>
          <Link to="/post/29번 출구/스타벅스 29">29번 출구</Link>
        </li>
        <li>
          <Link to="/post/30번 출구/에그드랍 30">30번 출구</Link>
        </li>
        <li>
          <Link to="/post/31번 출구/모다백화점 31">31번 출구</Link>
        </li>
        <li>
        <button onClick={() => navigate(- 1)}>뒤로가기</button>
        </li>
      </ul>
    </>  
  )
}

function Post() {
  // useParams(): url로 전달된 parameter를 가지고 있는 객체를
  // return 한다
  const {num} = useParams();
  const {image} = useParams();
  // const postId = params.postId;

  console.log(num);
  console.log(image);

  

  let navigate = useNavigate();
  return (
    <>
      <h1>{num}</h1>
      <img src={`/사진이지롱/${image}.PNG`} className='imgs'/><p></p>
      <button onClick={() => navigate(- 1)}>뒤로가기</button>
      <button onClick={() => navigate(- 2)}>메인화면</button>
    </>  
  )
}

function Contact() {
  return <h1>Contact</h1>
}

function NotFound() {
  return <h1>404 NotFound</h1>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/postsc" element={<Postsc />} />
        <Route path="/postsd" element={<Postsd />} />
        <Route path="/postse" element={<Postse />} />
        <Route path="/post/:num/:image" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>  
  )
}