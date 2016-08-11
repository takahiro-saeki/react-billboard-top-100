import React, {Component} from 'react';
import { connect } from 'react-redux';
import Samples from '../component/Samples';

let Sample = connect()(Samples);

export default Sample;
