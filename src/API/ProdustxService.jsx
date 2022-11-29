import React, { Component } from 'react';
import axios from 'axios'; 

export default class ProdustxService extends Component {
  static async getAllProducts () {
    const response = await axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/props/listing/data/etsy.json`);
    return response.data;
  }
}
