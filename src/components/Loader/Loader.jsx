import React from 'react';
import { SpinnerBlade, SpinnerElement } from './Loader.styles.jsx';


const Loader = ({ size }) => (
   
    <SpinnerElement size={`${size}px`}>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
        <SpinnerBlade></SpinnerBlade>
    </SpinnerElement>
    
);

export default Loader;