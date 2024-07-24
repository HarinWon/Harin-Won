// 현재 위치를 기반으로 지도를 설정하는 함수
const showPosition = (position) => {
  const latitude = position.coords.latitude; // 위도
  const longitude = position.coords.longitude; // 경도

  // 카카오 지도 API의 LatLng 객체를 사용하여 현재 위치로 지도의 중심을 설정
  const container = document.querySelector("#map");
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude), // 현재 위치로 중심 설정
    level: 3, // 지도 확대 레벨
  };

  // 지도 객체 생성
  const map = new kakao.maps.Map(container, options);

  // Olive Store Info
  const positions = [
    {
      title: "올리브영 강남우성점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      adress: "서울시 강남구 강남대로 320",
      img: "./img/img1.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
    {
      title: "올리브영 강남중앙점",
      latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
      adress: "서울시 강남구 강남대로 374",
      img: "./img/img2.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 9시",
    },
    {
      title: "올리브영 서초타운점",
      latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
      adress: "서울시 강남구 서초대로 78길",
      img: "./img/img3.jpg",
      info: "영업시간 : 오전 10시 ~ 저녁 9시",
    },
    {
      title: "올리브영 서초대로점",
      latlng: new kakao.maps.LatLng(37.4940977, 127.0158067),
      adress: "서울시 강남구 서초대로 314",
      img: "./img/img4.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 10시",
    },
    {
      title: "올리브영 역삼역점",
      latlng: new kakao.maps.LatLng(37.4996723, 127.0342751),
      adress: "서울시 강남구 테헤란로 111",
      img: "./img/img5.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 8시",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const content = `
    <div class="wrap">
      <div class="info">
        <div class="title">${positions[i].title}</div>
        <div class="body">
          <div class="img">
            <img src="${positions[i].img}" width="73" height="70">
          </div>
          <div class="desc">
            <div class="ellipsis">${positions[i].adress}</div>
            <div class="jibun ellipsis">${positions[i].info}</div>
            <div><a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0" target="_blank" class="link">쇼핑몰 바로가기</a></div>
          </div>
        </div>
      </div>
    </div>;
    `;
    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });
  }

  // 현재 위치에 마커 추가
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커를 지도에 표시
  marker.setMap(map);

  // Kakao Marker InfoWindow
  const iwContent = `<div class ="label"><span class="left"></span><span class="center">🎈현재위치</span><span class="right"></span></div>`;
  const iwPosition = new kakao.maps.LatLng(latitude, longitude);
  const infowindow = new kakao.maps.CustomOverlay({
    content: iwContent,
    position: iwPosition,
  });
  infowindow.setMap(map);
};

// 위치 정보 요청 실패 시 호출되는 함수
const errorPosition = () => {
  console.error("위치 정보를 가져올 수 없습니다.");
};

// 현재 위치 요청
navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
