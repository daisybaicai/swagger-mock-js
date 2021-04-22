export default {
  "POST /api/admin/Auditing": {
    "code": 0,
    "msg": "success"
  },
  "POST /api/admin/RationingResponsibility": {
    "code": 0,
    "msg": "success"
  },
  "POST /api/admin/consumptionProofIssue": {
    "code": 0,
    "msg": "success"
  },
  "GET /api/admin/findUser": {
    "code": 0,
    "data": {
      "count": 10,
      "items": [
        {
          "consumptionProof": 123,
          "creditId": "creditId-mock-key",
          "enterpriseAddress": "enterpriseAddress-mock-key",
          "enterpriseName": "enterpriseName-mock-key",
          "greenProof": 123,
          "id": 123,
          "money": 123,
          "passWord": "passWord-mock-key",
          "privateKey": "privateKey-mock-key",
          "publicKey": "publicKey-mock-key",
          "status": 123,
          "type": 123,
          "userCode": "userCode-mock-key",
          "userName": "userName-mock-key"
        }
      ],
      "total": 10
    },
    "msg": "success"
  },
  "POST /api/admin/getRationingResponsibility": {
    "code": 0,
    "data": {
      "consumptionProofNum": 123,
      "countNum": 123,
      "greenProofNum": 123
    },
    "msg": "success"
  },
  "POST /api/transation/bilateralDeals": {
    "code": 0,
    "msg": "success"
  },
  "POST /api/transation/delisting": {
    "code": 0,
    "msg": "success"
  },
  "POST /api/transation/findOrder": {
    "code": 0,
    "data": {
      "buyerCode": "buyerCode-mock-key",
      "consumptionProof": 123,
      "greenProof": 123,
      "id": 123,
      "money": 123,
      "orderId": "orderId-mock-key",
      "orderType": 123,
      "sellerCode": "sellerCode-mock-key",
      "time": "time-mock-key",
      "txHash": "txHash-mock-key"
    },
    "msg": "success"
  },
  "GET /api/transation/getBilateralDeals": {
    "code": 0,
    "data": {
      "count": 10,
      "items": [
        {
          "buyCreditId": "buyCreditId-mock-key",
          "buyEnterpriseName": "buyEnterpriseName-mock-key",
          "buyUserCode": "buyUserCode-mock-key",
          "id": 123,
          "num": 123,
          "operatingCreditId": "operatingCreditId-mock-key",
          "proofType": 123,
          "sellCreditId": "sellCreditId-mock-key",
          "sellEnterpriseName": "sellEnterpriseName-mock-key",
          "sellUserCode": "sellUserCode-mock-key",
          "transactionDate": "transactionDate-mock-key",
          "transactionHash": "transactionHash-mock-key",
          "transactionStatus": 123,
          "transation": 123,
          "trationType": 123,
          "unitPrice": 123
        }
      ],
      "total": 10
    },
    "msg": "success"
  },
  "GET /api/transation/getUnilateralDeals": {
    "code": 0,
    "data": {
      "count": 10,
      "items": [
        {
          "buyCreditId": "buyCreditId-mock-key",
          "buyEnterpriseName": "buyEnterpriseName-mock-key",
          "buyUserCode": "buyUserCode-mock-key",
          "id": 123,
          "num": 123,
          "operatingCreditId": "operatingCreditId-mock-key",
          "proofType": 123,
          "sellCreditId": "sellCreditId-mock-key",
          "sellEnterpriseName": "sellEnterpriseName-mock-key",
          "sellUserCode": "sellUserCode-mock-key",
          "transactionDate": "transactionDate-mock-key",
          "transactionHash": "transactionHash-mock-key",
          "transactionStatus": 123,
          "transation": 123,
          "trationType": 123,
          "unitPrice": 123
        }
      ],
      "total": 10
    },
    "msg": "success"
  },
  "POST /api/transation/offer": {
    "code": 0,
    "msg": "success"
  },
  "POST /api/transation/operateDeals": {
    "code": 0,
    "msg": "success"
  },
  "POST /api/transation/unilateralDeals": {
    "code": 0,
    "msg": "success"
  },
  "POST /api/user/delUserinfo": {
    "code": 0,
    "msg": "success"
  },
  "GET /api/user/getUserinfo": {
    "code": 0,
    "data": {
      "consumptionProof": 123,
      "creditId": "creditId-mock-key",
      "enterpriseAddress": "enterpriseAddress-mock-key",
      "enterpriseName": "enterpriseName-mock-key",
      "greenProof": 123,
      "id": 123,
      "money": 123,
      "passWord": "passWord-mock-key",
      "privateKey": "privateKey-mock-key",
      "publicKey": "publicKey-mock-key",
      "status": 123,
      "type": 123,
      "userCode": "userCode-mock-key",
      "userName": "userName-mock-key"
    },
    "msg": "success"
  },
  "POST /api/user/login": {
    "code": 0,
    "data": {
      "role": 123,
      "status": 123,
      "token": "token-mock-key"
    },
    "msg": "success"
  },
  "POST /api/user/profiles": {
    "code": 0,
    "data": "data-mock-key",
    "msg": "success"
  },
  "POST /api/user/register": {
    "code": 0,
    "data": {
      "priKey": "priKey-mock-key",
      "pubKey": "pubKey-mock-key"
    },
    "msg": "success"
  },
  "POST /api/user/sign": {
    "code": 0,
    "data": {
      "originalData": "originalData-mock-key",
      "singData": "singData-mock-key"
    },
    "msg": "success"
  },
  "POST /api/user/updateMoney": {
    "code": 0,
    "data": "data-mock-key",
    "msg": "success"
  },
  "POST /api/user/updateProfiles": {
    "code": 0,
    "msg": "success"
  }
}