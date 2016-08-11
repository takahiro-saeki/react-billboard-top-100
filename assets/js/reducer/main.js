import React, {Component} from 'react';
import { connect } from 'react-redux';
import Test from '../component/Test';

let Mains = connect()(Test);

export default Mains;
