import React, {Component} from 'react';
import { connect } from 'react-redux';
import Test from '../component/Test';

let Main = connect()(Test);

export default Main;
