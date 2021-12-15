import mnjs from 'mnjs';
import Plot from 'react-plotly.js';

const Plotly = () => {
  // 2D Rotation Matrix
  const ROTATION_MATRIX_2D = mnjs.range(0, 360, 15);

  // Color Manipulation
  const randomRedColor = mnjs.rib(0, 220),
    randomGreenColor = mnjs.rib(0, 180),
    randomBlueColor = mnjs.rib(0, 240),
    randomOpacity = mnjs.divi(mnjs.rib(2, 6), 10);

  // Adjust Point Radius
  const pointRadius = mnjs.rib(8, 19);

  const xValue = ROTATION_MATRIX_2D,
    yValue = mnjs.sin.deg(ROTATION_MATRIX_2D);
  return (
    <div>
      <div className="plot">
        <h3>Line Plot Example</h3>
        <Plot
          data={[
            {
              x: xValue,
              y: yValue,
              type: 'line',
              mode: 'lines+markers',
              opacity: `${randomOpacity}`,
              marker: {
                size: `${pointRadius}`,
                color: `rgb(${randomRedColor},${randomGreenColor},${randomBlueColor})`,
                line: {
                  color: 'black',
                  width: 2,
                },
              },
            },
          ]}
          layout={{
            title: 'The sin of 2D Rotation Matrix',
            xaxis: { range: [0, 360], dtick: 30, title: 'X' },
            yaxis: { title: 'Y = Sin (X)' },
          }}
        />
      </div>

      <br />

      <div className="plot">
        <h3>Bar Plot Example</h3>
        <Plot
          data={[
            {
              x: xValue,
              y: yValue,
              type: 'bar',
              opacity: `${randomOpacity}`,
              width: 10,
              marker: {
                color: `rgb(${randomRedColor},${randomGreenColor},${randomBlueColor})`,
                line: {
                  color: 'black',
                  width: 2,
                },
              },
            },
          ]}
          layout={{
            title: 'The sin of 2D Rotation Matrix',
            xaxis: { range: [0, 360], dtick: 30, title: 'X' },
            yaxis: { title: 'Y = Sin (X)' },
          }}
        />
      </div>

      <br />

      <div class="plot">
        <h3>Random Values</h3>
        <div
          style={{
            backgroundColor: `rgb(${randomRedColor},${randomGreenColor}, ${randomBlueColor}, ${randomOpacity})`,
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <p>
            <b>
              Color : rgb({randomRedColor}, {randomGreenColor},{' '}
              {randomBlueColor}, {randomOpacity})
            </b>
          </p>
          <p>
            <b>Point Radius : {pointRadius} px</b>
          </p>
        </div>
      </div>

      <div style={{ margin: '100px 50px' }}>
        <h3>Links:</h3>
        <ul>
          <li>
            <b>MNJS</b>:<br />
            <a
              href="https://www.npmjs.com/package/mnjs"
              target="_blank"
              rel="noreferrer"
            >
              https://www.npmjs.com/package/mnjs
            </a>
            <br />
            <a
              href="https://github.com/dr-montasir/mnjs"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/dr-montasir/mnjs
            </a>
          </li>

          <br />

          <li>
            <b>Plotly.js</b>:<br />
            <a
              href="https://plotly.com/javascript/"
              target="_blank"
              rel="noreferrer"
            >
              https://plotly.com/javascript/
            </a>
            <br />
            <a
              href="https://plotly.com/javascript/react/"
              target="_blank"
              rel="noreferrer"
            >
              https://plotly.com/javascript/react/
            </a>
          </li>
        </ul>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div>________________________________________________________</div>
        <br />
        <div>
          {new Date().getFullYear() === 2021
            ? new Date().getFullYear()
            : `2021 - ${new Date().getFullYear()}`}{' '}
          All rights reserved @ https://github.com/dr-montasir
        </div>
        <div>________________________________________________________</div>
        <br />
      </div>
    </div>
  );
};

export default Plotly;
