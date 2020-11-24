import React from 'react';

export default function HeaderhtmlForm() {
    return (
            <div>
                <table style=
                    {{margin: "auto",
                    width: "100%",
                    height: "fit-content",
                    display: "inline-flexbox",
                    flexDirection: "column",
                    justifyContent: "center"}}
                >
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