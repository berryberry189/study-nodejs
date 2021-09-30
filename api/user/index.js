// 스우팅 설정 로직
const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl')


// 사용자 목록 조회
router.get('/', ctrl.index); // '/'라우팅에 대한 ctrl.index를 바인딩 해주고있음

// 사용자 조회
router.get('/:id', ctrl.show);

// 사용자 삭제
router.delete('/:id', ctrl.destroy);

// 사용자 추가
router.post('/', ctrl.create);

// 사용자 수정
router.put('/:id', ctrl.update);

module.exports = router;
