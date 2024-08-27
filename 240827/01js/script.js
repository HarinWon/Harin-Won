const showPosition = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=ShOga8eWbLr2bJlunncz%2BxCpejtPPzzqaLkFXXFa3HrKyR6%2Buzdrk0oDZsUJCYneS4w85u1NJkHkbxskpS5a8w%3D%3D&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json.response.body.items.item;
      console.log(data);

      const { latitude, longitude } = position.coords;

      const mapContainer = document.querySelector("#map");
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      // 클러스터러 생성
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      let markers = [];

      for (let i = 0; i < data.length; i++) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });

        markers.push(marker);

        const infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });

        const makeOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };
        const makeOutListener = (infowindow) => {
          return () => {
            infowindow.close();
          };
        };

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );

        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }

      // 마커 클러스터러에 마커들 추가
      clusterer.addMarkers(markers);
    });

  // 현재 위치 마커 추가
  const currentMarkerPosition = new kakao.maps.LatLng(latitude, longitude);
  const currentMarker = new kakao.maps.Marker({
    position: currentMarkerPosition,
    map: map,
  });

  const currentInfowindowContent =
    '<div style="padding:5px;"><a href="https://www.naver.com" target= "_blank">현재 위치</a></div>';
  const currentInfowindow = new kakao.maps.InfoWindow({
    content: currentInfowindowContent,
    removable: true,
  });

  kakao.maps.event.addListener(currentMarker, "click", function () {
    currentInfowindow.open(map, currentMarker);
  });
};

const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
