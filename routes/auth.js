const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

router.post('/signup', (req, res, next) => {
  //To do: 전달 받은 인자들의 값 validation, 반환 status 400번, erros  배열에 상세 오류 추가...
  //Passport 처리: DB 확인해 이미 존재하는 이메일일 경우, status 409 번 반환, erros  배열에 상세 오류 추가...

    //문제 없을 경우의 반환값
    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    });
});

router.post('/login', (req, res, next) => {
  //To do: 전달 받은 인자들의 값 validation,  반환 status 400번, erros  배열에 상세 오류 추가...

  //Passport 처리..
  //passport.authenticate 이용,  반환 status 400번, 인증만 실패한 경우는 그냥 message에 담기..

    let token = 'tempToken';
    let userData = {};

    //문제없을 경우의 반환값,passport 모듈에서 받은 토큰 반환해야 함...
    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
});

module.exports = router;
