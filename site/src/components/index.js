import ReactMarkdown from 'react-markdown';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import Score from "./Score"


let FancyReactMarkdown = (props) =>
  <ReactMarkdown //TODO: Factor this (and the ReactMarkdown on the homepage) into a single shared util file...
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }} 
  >{ props.children }</ReactMarkdown>

export { FancyReactMarkdown, Score }