import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from "react-bootstrap";

export default function Home() {
    return (
        <Container className="Home-container" fluid="md">
            <Row xs="auto">
                <Col md={5}/>
                <Col md="auto">
                    <h1 className="glitched-text" data-text="Summary">Summary</h1>
                </Col>
            </Row>
            <br/>
            <Row xs="auto">
                <Col md="auto">
                    <img className="App-logo" src="filler.png" width={100} height={110}/>
                </Col>
                <Col md="auto">
                    <a name="main"></a>
                    <text>
                        <b>Surname:</b> Kolpakov
                        <br/>
                        <b>Name:</b> Daniil
                        <br/>
                        <b>Patronymic:</b> Andreevich
                        <p>
                            <b>GitHub:</b><a>https://github.com/Sarkhanas</a>
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
                            <td><h3 className="glitched-text" data-text="Abilities" align="center">Abilities</h3></td>
                            <td><h3 className="glitched-text" data-text="Knowledge" align="center">Knowledge</h3></td>
                            <td><h3 className="glitched-text" data-text="Hobby" align="center" colspan={2}>Hobby</h3></td>
                            <td><h3 className="glitched-text" data-text="Top favourite food" align="center">Top favourite food</h3></td>
                        </tr>
                        <tr>
                            <td>
                                <list>
                                    <li>Adobe Photoshop</li>
                                    <li>Python</li>
                                    <li>Krita</li>
                                    <li>C#</li>
                                    <li>Delphi</li>
                                    <li>Wondershare Filmora</li>
                                </list>
                            </td>
                            <td rowspan={2}>
                                <list>
                                    <li>English</li>
                                    <li>Graphic Design</li>
                                </list>
                            </td>
                            <td>
                                <ol>
                                    <li><s>Fencing</s></li>
                                    <li><s>Kickboxing</s></li>
                                    <li>Knitting with rubber bands</li>
                                    <li>Text Role Play</li>
                                </ol>
                            </td>
                            <td>
                                <ol>
                                    <li>Pilaf</li>
                                    <li>Chop in French</li>
                                    <li>Sorrel soup</li>
                                    <li>Ramen</li>
                                    <li>Sushi</li>
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
                    <h3>Loved Videos</h3>
                    <iframe width="478" height="269" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Col>
            </Row>
            <br/>
            <Row xs="auto">
                <Col md="auto">
                    <h3>Loved Music</h3>
                    <i>1) Johnny_Silverhand_ThemeCello_Violin_version_Cyberpunk_2077</i>
                    <br/>
                    <audio controls >
                        <source src="Johnny_Silverhand_ThemeCello_Violin_version_Cyberpunk_2077_160kbps.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                    <br/>
                    <i>2) Three Days Grace - Animal I Have Become</i>
                    <br/>
                    <audio controls>
                        <source src="Three Days Grace - Animal I Have Become ( 256kbps cbr ) (1).mp3" type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                    <br/>
                    <i>3) Mat Zenk - DEEP ROCK SHANTY (Doomer Remix)</i>
                    <br/>
                    <audio controls>
                        <source src="Mat Zenk - DEEP ROCK SHANTY (Doomer Remix) ( 256kbps cbr ).mp3" type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                    <br/>
                    <i>4) Kumo_Desu_ga,_Nani_ka_Ending_2_Full</i>
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
                        <li><a href="#main">Main INFO</a></li>
                        <li><a href="#little_more">Little more about me</a></li>
                        <li><a href="#things">Loved things and other</a></li>
                        <li><a href="#top">To the top</a></li>
                    </list>
                </Col>
            </Row>
        </Container>
    );
}