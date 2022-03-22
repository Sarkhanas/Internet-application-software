import Logo from './res/summary-stamp.jpg'
import Photo from './res/filler.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <div class="header-container">
          <table align="center" width="99%">
            <tr class="container" align="center">
              <td class="logo" align="left" width="10%">
                <img src="summary-stamp.jpg"/>
              </td>
              <td class="quiz" align="right">
                <a>Опрос</a>
              </td>
              <td class="questionnaire" align="right" width="3%">
                <a>Анкета</a>
              </td>
              <td class="login" align="right" width="3%">
                <a>Войти</a>
              </td>
            </tr>
          </table>
        </div>
        <hr/>
      </header>

      <table align="center" width="99%">
        <h2 align="center">Резюме</h2>
        <tr align="center">
          <td align="left" width="7%">
            <img src="filler.jpg" alt="Фото/логотип" height="180" width="125"/>
          </td>
          <td align="left">
            <p>
              <strong>Колпаков Даниил Андреевич</strong>
            </p>
            <p>
              <strong>Желаемая должность: </strong> back-end разработчик
              <br/>
                <strong>Желаемый уровень дохода: </strong> <s>1000$</s> <i><ins>3000$</ins></i>
            </p>
            <p>Дата рождения: 30.08.2003</p>
            <p>
              <strong>Контактная инофрмация:</strong>
              <br/>
                Телефон: +375 33 *** ****
              <br/>
              GitHub: <a href="https://github.com/Sarkhanas"/>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <h3>Навыки</h3>
            <ul>
              <li>Работа с редактором изображений Adobe Photoshop</li>
              <li>Программирование на Python</li>
              <li>Работа с редактором изображений Krita</li>
              <li>Программирование на C#</li>
              <li>Работа в Delphi</li>
              <li>Работа с редактором видео Wondershare Filmora</li>
            </ul>
          </td>
          <td>
            <h3>Знания</h3>
            <ul>
              <li>Английский язык на уровне B1</li>
              <li>Графический дизайн</li>
            </ul>
          </td>
        </tr>
      </table>

      <footer>
        <hr/>
        <div class="footer-top">
          <div class="container">
            <ul>
              <li>© Колпаков Даниил, 2022</li>
              <li>Коммерческое использование материалов данного сайта запрещено. В остальных случаях обязательно
                наличие индексируемой ссылки со словом "Источник" на сайт или на страницу, содержащую этот материал.
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <p align="center">Advertising</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
