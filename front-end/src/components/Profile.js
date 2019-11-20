import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import styles from '../CSS/Profile.module.css';
import classNames from 'classnames';


export default class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <Header />
                <div className={styles.background}>
                    <div className={styles.container}>
                        <h2> Profile</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td> <img className={classNames(styles.profileImg, styles.inline)} alt='profileImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'></img>
                                    </td>
                                    <td className={styles.username}>Username: Dmitrii231</td>
                                </tr>
                                <tr>
                                    <td>    <img className={classNames(styles.profileImg, styles.inline)} alt='email' src='https://www.stickpng.com/assets/images/584856b4e0bb315b0f7675ac.png'></img>
                                    </td>
                                    <td className={styles.username}>Email: Dmitrii231@mail.ru</td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <h2> Your are selling now</h2>
                        <div style={{overflowX:"auto"}}>
  <table className={styles.productTable}>
    <tr>
      <th>Product Name</th>
      <th>Price</th>
      <th>Amount</th>
      <th>Date of Buying</th>

    </tr>
    <tr>
      <td>Jill </td>
      <td>12$</td>
      <td>50</td>
      <td>19.01.200</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
      <td>94</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>67</td>
      <td>67</td>

    </tr>
  </table>
</div>
<br></br>
                        <h2> You bought before</h2>
                        <div style={{overflowX:"auto"}}>
  <table className={styles.productTable}>
    <tr>
      <th>Product Name</th>
      <th>Price</th>
      <th>Amount</th>
      <th>Date of Adding</th>

    </tr>
    <tr>
      <td>Jill </td>
      <td>12$</td>
      <td>50</td>
      <td>19.01.200</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
      <td>94</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>67</td>
      <td>67</td>

    </tr>
  </table>
</div>

                    </div> 
                </div>

            </>
        )

    }
}
