import React, { Component } from 'react';
import uuid from 'uuid';
import CreateNote from './CreateNote';

it("has a variable of today", () => {
  let today = new Date();
  expect(today).toBeDefined();
})

it("has a variable of date", () => {
  let today = new Date();
  let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  expect(date).toBeDefined();
})