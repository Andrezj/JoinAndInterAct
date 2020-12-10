import React from 'react';
import styles from './styles.css';

export default function HeaderhtmlForm() {
    return (
            <div>
                <table id='header-form-container'>
                    <thead>
                        <tr>
                            <th colSpan="3 padding">See what is going around the area</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="fname">Add Interest</label>
                                <input type="text" id="fname" name="fname" placeholder="What you like?"></input><br></br>                        
                            </td>
                            <td>
                                <label htmlFor="fname">Add Activity</label>
                                <input type="text" id="fname" name="fname" placeholder="What are you doing?"></input><br></br> 
                            </td>
                            <td style={{ display: "flex",
                                flexDirection: "column"}}
                            >
                                <button>Allow Location Access</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
};