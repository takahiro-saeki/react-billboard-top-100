import React, {Component} from 'react';
import { connect } from 'react-redux';
import Test from '../component/Test';
import request from 'superagent';

function hogee() {
  return console.log('test')
}

function fooo() {
  request
    .get('https://www.tunefind.com/api/v1/show')
    .withCredentials()
    .type('xml')
    .end((err, res) => {
      if(err) {
        console.log(err)
      } else {
        console.log(res)
      }
    })
}

let Main = connect(
  hogee,
  fooo
)(Test);

export default Main;
