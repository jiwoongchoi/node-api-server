# MongoDB 설치(Mac)
- HomeBrew 설치 : https://brew.sh/index_ko.html
- mongoDB 설치 : 설치, 폴더 생성, 권한 부여

    brew install mongodb  
    sudo mkdir –p /data/db  
    sudo  chown  맥사용자아이디 /data/db  
- mongoDB 실행: 별도 터미널을 열어 아래 명령어를 입력, 종료하고 싶을 때는 Ctrl+C를 입력

      mongod  

# API 서버 실행하기

    npm install
    npm run start

# API 테스트 하기
testapi.http 파일을 이용하여 테스트

# API 실행 결과
responses 폴더에 각 상황에 대한 결과가 있음

# npm 설치 오류 대응
- python 3.x 가 설치되어 있을 때, bcrypt npm이 설치되지 않는 증상이 있음
- Python Version Manager 이용: https://github.com/pyenv/pyenv

# 읽어볼 내용
- Passport 이용해 로그인 로그아웃 처리하는 예제: http://webframeworks.kr/tutorials/expressjs/auth_log_in_out/
- mongoose.js : http://mongoosejs.com/
- Express.js: http://expressjs.com/
- Passport.js: http://passportjs.org/
- Json Web Token(JWT): https://velopert.com/2389
- Cross Origin Resource Sharing(CORS): (http://homoefficio.github.io/2015/07/21/Cross-Origin-Resource-Sharing/)
# node-api-server
