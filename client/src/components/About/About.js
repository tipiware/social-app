import React, { useState, useEffect } from "react";
import {Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';




const Home = () => {

    return (

        <Grow in>
            <Container maxWidth="xl">
            <h2>Welcome to Social book, We're thrilled to have you as part of our online community. Our mission is to provide a safe, enjoyable, and respectful space for users to connect, share, and communicate. To ensure a positive experience for all, we ask that you adhere to the following guidelines:</h2>
            <h3>
            <ul>
                <li>Respect Others: Treat fellow users with kindness and respect. Do not engage in hate speech, harassment, or any form of discrimination. We have zero tolerance for bullying or threats.<p/></li>
                <li>Impersonation: Do not impersonate other users, brands, or individuals. Authenticity is key on our platform<p/></li>
                <li>Updates: This policy may be updated from time to time to adapt to changes in technology, user behavior, or legal requirements. Users will be notified of any significant policy changes.<p/></li>
                <li>Privacy: Protect your own privacy and respect the privacy of others. Do not share personal information such as addresses, phone numbers, or financial details. If you encounter someone violating another user's privacy, report it to us immediately.<p/></li>
                <li>Content Guidelines: Share content that is appropriate and legal. Do not post content that is explicit, violent, or infringes on copyright or intellectual property rights. Avoid spreading false information or engaging in spammy behavior.<p/></li>
                <li>Safety and Security: Do not engage in any activity that compromises the safety and security of our platform or its users. This includes hacking, phishing, or any form of cybercrime.</li>
            </ul>
            </h3>

            </Container>
            
        </Grow>

     
    );
};


export default Home;