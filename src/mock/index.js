const Mock = require('mockjs');
Mock.mock('/api/movieComingList=20', 'get', require('./json/movieComingList=20'));
// Mock.mock('/api/allCityList', 'get', require('./json/allCity'));
Mock.mock('/api/movieOnInfoList=10','get',require('./json/movieOnInfoList=10'));
Mock.mock('/api/movieOnInfoList=1','get',require('./json/movieOnInfoList=1'));
Mock.mock('/api/movieOnInfoList=20','get',require('./json/movieOnInfoList=20'));
Mock.mock('/api/movieOnInfoList=40','get',require('./json/movieOnInfoList=40'));
Mock.mock('/api/movieOnInfoList=45','get',require('./json/movieOnInfoList=45'));
Mock.mock('/api/movieOnInfoList=50','get',require('./json/movieOnInfoList=50'));
Mock.mock('/api/movieOnInfoList=55','get',require('./json/movieOnInfoList=55'));
Mock.mock('/api/movieOnInfoList=59','get',require('./json/movieOnInfoList=59'));
Mock.mock('/api/movieComingList=10','get',require('./json/movieComingList=10'));
Mock.mock('/api/movieComingList=1','get',require('./json/movieComingList=1'));
Mock.mock('/api/movieComingList=55','get',require('./json/movieComingList=55'));
Mock.mock('/api/movieComingList=45','get',require('./json/movieComingList=45'));
Mock.mock('/api/movieComingList=59','get',require('./json/movieComingList=59'));
Mock.mock('/api/movieComingList=20','get',require('./json/movieComingList=20'));
Mock.mock('/api/movieComingList=40','get',require('./json/movieComingList=40'));
Mock.mock('/api/movieComingList=50','get',require('./json/movieComingList=50'));
Mock.mock('/api/allCityList=10','get',require('./json/allCityList=10'));
Mock.mock('/api/allCityList=1','get',require('./json/allCityList=1'));
Mock.mock('/api/allCityList=20','get',require('./json/allCityList=20'));
Mock.mock('/api/allCityList=40','get',require('./json/allCityList=40'));
Mock.mock('/api/allCityList=45','get',require('./json/allCityList=45'));
