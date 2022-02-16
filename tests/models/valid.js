const validModels = {};

// Empty model
validModels.nullElement = {
  ccc: null
};

/* The most basic model */
validModels.singleElement = {
  ccc: {
    kind: 'block',
    type: 'container',
    textContent: 'Hello'
  }
};

/* Basic node, within a root array */
validModels.arrayAsRoot = {
  ccc: [
    {
      kind: 'block',
      type: 'container',
      textContent: 'Hello'
    }
  ]
};

/* A top element, styled as a paragraph */
validModels.singleElementParagraph = {
  ccc: {
    kind: 'block',
    type: 'paragraph',
    textContent: 'Hello'
  }
};

/* A top element, styled as emphasized */
validModels.singleElementEmphasized = {
  ccc: {
    kind: 'block',
    type: 'emphasized',
    textContent: 'Hello'
  }
};

/* A top element, styled as emphasized */
validModels.singleElementEmphasized = {
  ccc: {
    kind: 'block',
    type: 'emphasized',
    textContent: 'Hello'
  }
};

/* A top element, styled as quote */
validModels.singleElementQuote = {
  ccc: {
    kind: 'block',
    type: 'quote',
    textContent: 'Hello'
  }
};

/* A top element, with shared metadata */
validModels.singleElementSharedMetadata = {
  ccc: {
    kind: 'block',
    type: 'container',
    textContent: 'Hello',
    metadata: {
      id: 'my-id'
    }
  },
  html: '<div id="my-id">Hello</div>'
};

/* A top element with children */
validModels.withNodeChildren = {
  ccc: {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: null,
        textContent: 'See '
      },
      {
        kind: 'inline',
        type: 'emphasized',
        textContent: 'you'
      },
      {
        kind: 'inline',
        type: null,
        textContent: ' later'
      }
    ]
  },
  html: '<p>See <em>you</em> later</p>'
};

validModels.withEmptyTextChilds = {
  ccc: {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'container',
        textContent: 'Hello '
      },
      {
        kind: 'inline',
        type: 'emphasized',
        textContent: 'you'
      },
      {
        kind: 'inline',
        type: null,
        textContent: ' '
      },
      {
        kind: 'inline',
        type: 'emphasized',
        textContent: 'dog'
      }
    ]
  },
  html: '<p><span>Hello </span><em>you</em> <em>dog</em></p>'
};

/* A complex node */
validModels.complex = {
  ccc: [
    {
      kind: 'block',
      type: 'container',
      children: [
        {
          kind: 'block',
          type: 'paragraph',
          children: [
            {
              kind: 'inline',
              type: 'emphasized',
              textContent: 'Hello you'
            }
          ]
        },
        {
          kind: 'inline',
          type: 'link',
          textContent: 'How are you ',
          metadata: {
            href: '#',
            target: '_blank'
          }
        },
        {
          kind: 'inline',
          type: 'strong',
          textContent: 'doing?'
        },
        {
          kind: 'block',
          type: 'ordered-list',
          children: [
            {
              kind: 'block',
              type: 'list-item',
              textContent: 'List item 1'
            },
            {
              kind: 'block',
              type: 'list-item',
              textContent: 'List item 2'
            }
          ]
        }
      ]
    },
    {
      kind: 'block',
      type: 'paragraph',
      textContent: 'A simple paragraph at the end'
    }
  ],
  html:
    '<div><p><em>Hello you</em></p><a href="#" target="_blank">How are you </a><strong>doing?</strong><ol><li>List item 1</li><li>List item 2</li></ol></div><p>A simple paragraph at the end</p>'
};

validModels.withEmptyParagraph = {
  ccc: {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'line-break'
      }
    ]
  },
  html: '<p><br/></p>'
};

validModels.withStrongTag = {
  ccc: {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'strong',
        textContent: 'sad'
      },
      {
        kind: 'inline',
        type: null,
        textContent: 'asd'
      }
    ]
  },
  html: '<p><strong>sad</strong>asd</p>'
};

validModels.withBlockNodesHavingTextContent = {
  ccc: {
    kind: 'block',
    type: 'container',
    textContent: 'hey'
  },
  html: '<div>hey</div>'
};

module.exports = {
  validModels
};
