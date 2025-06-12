//練習問題1.以下の HTML に表される DOM を出力する React コードを書いてください。（JSX を使用します。）
//<img src="https://media.giphy.com/media/33OrjzUFwkwEg/giphy.gif" alt="" />

function Gif({ id }) {
  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return <img src={src} alt="" />;
}

const app = <Gif id="33OrjzUFwkwEg" />;

const root = document.getElementById('root');
ReactDOM.render(app, root);




//練習問題2.以下の HTML に表される DOM を出力する React コードを書いてください。（JSX を使用します。）

//<section id="react" class="box">
  //<h1 class="title">React</h1>
  //<dl class="definition">
    //<dt class="definition-title">Initial release</dt>
    //<dd class="definition-content">2013/5</dd>
    //<dt class="definition-title">Github stars</dt>
    //<dd class="definition-content">147,940</dd>
  //</dl>
//</section>
//<section id="vue" class="box">
  //<h1 class="title">Vue.js</h1>
  //<dl class="definition">
    //<dt class="definition-title">Initial release</dt>
    //<dd class="definition-content">2014/2</dd>
    //<dt class="definition-title">Github stars</dt>
    //<dd class="definition-content">163,165</dd>
  //</dl>
//</section>
//<section id="angular" class="box">
  //<h1 class="title">Angular</h1>
  //<dl class="definition">
    //<dt class="definition-title">Initial release</dt>
    //<dd class="definition-content">2016/9</dd>
    //<dt class="definition-title">Github stars</dt>
    //<dd class="definition-content">60,571</dd>
  //</dl>
//</section>

function Section({ id, title, children }) {
  return (
    <section id={id} className="box">
      <h1 className="title">{title}</h1>
      {children}
    </section>
  );
}

function DefinitionList({ items }) {
  return (
    <dl className="definition">
      {items.map(item => (
        <React.Fragment key={item.title}>
          <dt className="definition-title">
            {item.title}
          </dt>
          <dd className="definition-content">
            {item.content}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

const app = (
  <>
    <Section id="react" title="React">
      <DefinitionList
        items={[
          { title: 'Initial release', content: '2013/5' },
          { title: 'Github stars', content: '147,940' }
        ]}
      />
    </Section>
    <Section id="vue" title="Vue.js">
      <DefinitionList
        items={[
          { title: 'Initial release', content: '2014/2' },
          { title: 'Github stars', content: '163,165' }
        ]}
      />
    </Section>
    <Section id="angular" title="Angular">
      <DefinitionList
        items={[
          { title: 'Initial release', content: '2016/9' },
          { title: 'Github stars', content: '60,571' }
        ]}
      />
    </Section>
  </>
);

const root = document.getElementById('root');
ReactDOM.render(app, root);
