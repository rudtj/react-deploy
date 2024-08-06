# 카카오 테크 캠퍼스 6주차 과제 step2

- [x] 세가지 방법 중 본인이 원하는 방식으로 배포한다.
      (단, 가능하면 최대한 방법 1, 3번으로 진행하고 CI/CD를 구축하는 것을 권장해요)

방법1.

github action을 사용하여 ci/cd를 구성한다.
cloudflare의 pages에 배포한다.
방법2.

vercel을 사용하여 배포한다.
방법3.

github pages를 사용하여 배포한다.
서버 API가 의도대로 잘 동작하는지 확인하고, 문제가 있다면 해결한다.

# 카카오 테크 캠퍼스 6주차 과제 step4

- 1. SPA 페이지를 정적 배포를 하려고 할 때 Vercel을 사용하지 않고 한다면 어떻게 할 수 있을까요?
- GitHub Pages : GitHub 저장소에서 정적 웨사이트를 호스팅하는 방법이다.
- AWS S3와 CloudFront : AWS S3는 객체 저장소로 정적 파일을 호스팅할 수 있으며 CloudFront를 사용하면 CDN을 통해 빠르게 배포할 수 있다.
- Firebase Hosting : Google의 클라우드 플랫폼에서 제공하는 서비스로, 빠르고 안전하게 정적 웹사이트를 호스팅할 수 있다.

- 2. CSRF나 XSS 공격을 막는 방법은 무엇일까요?
- CSRF 방지 방법 - CSRF 토큰 사용 : 서버에서 생성한 고유한 CSRF 토큰을 클라이언트에 전달하고, 모든 상태 변경 요청(POST, PUT, DELETE 등)에 이 토큰을 포함시킨다. - SameSite 쿠키 속성 설정 : 쿠키에 SameSite 속성을 추가하여 외부 사이트에서의 요청을 차단합니다. SameSite=Lax 또는 SameSite=Strict로 설정할 수 있다.
- XSS 방지 방법 - 입력 검증 및 인코딩 : 사용자 입력을 철저히 검증하고, HTML, URL, JavaScript 등에서 사용할 때는 적절히 인코딩한다. - CSP : CSP를 설정하여 신뢰할 수 있는 출처에서만 스크립트를 로드하도록 제한한다. - HTTPOnly 및 Secure 쿠키 설정 : 쿠키에 HTTPOnly 속성을 추가하여 JavaScript에서 접근할 수 없도록 한다. Secure 속성을 추가하면 HTTPS 연결을 통해서만 쿠키가 전송된다.

- 3. 브라우저 렌더링 원리에 대해 설명해주세요.
- DOM(Document Object Model) 파싱 : HTML 문서를 파싱하여 DOM 구축한다.
- CSSOM(CSS Object Model) 생성 : CSS 파일을 파싱하여 CSSOM 생성한다.
- 렌더 트리 구성 : DOM과 CSSOM를 결합하여 렌더를 구성한다.
- 레이아웃 및 페인팅 : 렌더 트리 기반으로 요소의 정확한 위치와 크기를 계산한 레이아웃과 레이아웃 정보를 바탕으로 실제화면에 그린다.
- 컴포지팅 : 여러 레이어를 합성하여 최종적으로 화면에 표시한다.
