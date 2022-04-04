import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from "react-bootstrap";

export default function Home() {
    return (
        <Container className="Home-container" fluid="md">
            <Row xs="auto">
                <Col md={5}/>
                <Col md="auto">
                    <h1 className="glitched-text" className="font-edit" data-text="Summary">Summary</h1>
                </Col>
            </Row>
            <br/>
            <Row xs="auto">
                <Col md="auto">
                    <img className="App-logo" src="filler.png" width={100} height={110}/>
                </Col>
                <Col md="auto">
                    <a name="main"></a>
                    <text className="font-edit">
                        <b className="font-edit">Surname:</b> Kolpakov
                        <br/>
                        <b className="font-edit">Name:</b> Daniil
                        <br/>
                        <b className="font-edit">Patronymic:</b> Andreevich
                        <p>
                            <b className="font-edit">GitHub:</b><a className="font-edit">https://github.com/Sarkhanas</a>
                        </p>
                    </text>
                </Col>
            </Row>
            <br/>
            <Row xs="auto">
                <Col md={2}/>
                <Col md="auto">
                    <a name="little_more"></a>
                    <table border={3} align="center">
                        <tr>
                            <td><h3 className="font-edit" data-text="Abilities" align="center">Abilities</h3></td>
                            <td><h3 className="font-edit" data-text="Knowledge" align="center">Knowledge</h3></td>
                            <td><h3 className="font-edit" data-text="Hobby" align="center" colspan={2}>Hobby</h3></td>
                            <td><h3 className="font-edit" data-text="Top favourite food" align="center">Top favourite food</h3></td>
                        </tr>
                        <tr>
                            <td>
                                <list>
                                    <li className="font-edit">Adobe Photoshop</li>
                                    <li className="font-edit">Python</li>
                                    <li className="font-edit">Krita</li>
                                    <li className="font-edit">C#</li>
                                    <li className="font-edit">Delphi</li>
                                    <li className="font-edit">Wondershare Filmora</li>
                                </list>
                            </td>
                            <td rowspan={2}>
                                <list>
                                    <li className="font-edit">English</li>
                                    <li className="font-edit">Graphic Design</li>
                                </list>
                            </td>
                            <td>
                                <ol>
                                    <li><s className="font-edit">Fencing</s></li>
                                    <li><s className="font-edit">Kickboxing</s></li>
                                    <li className="font-edit">Knitting with rubber bands</li>
                                    <li className="font-edit">Text Role Play</li>
                                </ol>
                            </td>
                            <td>
                                <ol>
                                    <li className="font-edit">Pilaf</li>
                                    <li className="font-edit">Chop in French</li>
                                    <li className="font-edit">Sorrel soup</li>
                                    <li className="font-edit">Ramen</li>
                                    <li className="font-edit">Sushi</li>
                                </ol>
                            </td>
                        </tr>
                    </table>
                </Col>
            </Row>
            <br/>
            <Row xs="auto">
                <Col md="auto">
                    <a name="things"></a>
                    <h3 className="font-edit">Loved Videos</h3>
                    <iframe width="478" height="269" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Col>
            </Row>
            <br/>
            <Row xs="auto">
                <Col md="auto">
                    <h3 className="font-edit">Loved Music</h3>
                    <i className="font-edit">1) Johnny_Silverhand_ThemeCello_Violin_version_Cyberpunk_2077</i>
                    <br/>
                    <audio controls >
                        <source src="Johnny_Silverhand_ThemeCello_Violin_version_Cyberpunk_2077_160kbps.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                    <br/>
                    <i className="font-edit">2) Three Days Grace - Animal I Have Become</i>
                    <br/>
                    <audio controls>
                        <source src="Three Days Grace - Animal I Have Become ( 256kbps cbr ) (1).mp3" type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                    <br/>
                    <i className="font-edit">3) Mat Zenk - DEEP ROCK SHANTY (Doomer Remix)</i>
                    <br/>
                    <audio controls>
                        <source src="Mat Zenk - DEEP ROCK SHANTY (Doomer Remix) ( 256kbps cbr ).mp3" type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                    <br/>
                    <i className="font-edit">4) Kumo_Desu_ga,_Nani_ka_Ending_2_Full</i>
                    <br/>
                    <audio controls>
                        <source src="Kumo_Desu_ga,_Nani_ka_Ending_2_Full_『Genjitsu_Totsugeki_Hierarchy』.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                </Col>
            </Row>
            <br/>
            <Row xs="auto">
                <Col md="auto">
                    <list>
                        <li className="font-edit"><a href="#main">Main INFO</a></li>
                        <li className="font-edit"><a href="#little_more">Little more about me</a></li>
                        <li className="font-edit"><a href="#things">Loved things and other</a></li>
                        <li className="font-edit"><a href="#top">To the top</a></li>
                    </list>
                </Col>
            </Row>
        </Container>
    );
}