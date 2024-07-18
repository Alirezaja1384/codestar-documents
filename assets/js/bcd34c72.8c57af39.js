"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[3277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"CI/CD",description:""},i=void 0,p={unversionedId:"software-engineering/phase06-cicd",id:"software-engineering/phase06-cicd",title:"CI/CD",description:"",source:"@site/docs/software-engineering/phase06-cicd.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase06-cicd",permalink:"/codestar-documents/docs/software-engineering/phase06-cicd",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase06-cicd.md",tags:[],version:"current",frontMatter:{title:"CI/CD",description:""},sidebar:"tutorialSidebar",previous:{title:"TDD",permalink:"/codestar-documents/docs/software-engineering/phase05-tdd"},next:{title:"SQL",permalink:"/codestar-documents/docs/software-engineering/phase07-SQL"}},l={},s=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"CI/CD \u0686\u06cc\u0633\u062a \u0648 \u0686\u0631\u0627 \u0627\u0647\u0645\u06cc\u062a \u062f\u0627\u0631\u062f",id:"cicd-\u0686\u06cc\u0633\u062a-\u0648-\u0686\u0631\u0627-\u0627\u0647\u0645\u06cc\u062a-\u062f\u0627\u0631\u062f",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 GitHub Actions \u0648 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 CI/CD Pipeline \u0628\u0647 Repository",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-github-actions-\u0648-\u0627\u0636\u0627\u0641\u0647-\u06a9\u0631\u062f\u0646-cicd-pipeline-\u0628\u0647-repository",level:2},{value:"\u0627\u0646\u062a\u0634\u0627\u0631 package \u062f\u0631 NuGet.org",id:"\u0627\u0646\u062a\u0634\u0627\u0631-package-\u062f\u0631-nugetorg",level:2},{value:"\u0633\u0627\u062e\u062a \u06cc\u06a9 Console App \u0628\u0631\u0627\u06cc \u067e\u0631\u0648\u0698\u0647 \u0633\u0631\u0686",id:"\u0633\u0627\u062e\u062a-\u06cc\u06a9-console-app-\u0628\u0631\u0627\u06cc-\u067e\u0631\u0648\u0698\u0647-\u0633\u0631\u0686",level:2}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u0645\u0641\u0647\u0648\u0645\nCI/CD\n\u0648 \u0627\u0647\u0645\u06cc\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646 \u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f \u0648 \u0633\u067e\u0633 \u067e\u0631\u0648\u0698\u0647\u0654 \u062e\u0648\u062f \u0631\u0627 \u0628\u0647\nCI/CD\n\u0645\u062c\u0647\u0632 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f."),(0,r.kt)("h2",{id:"cicd-\u0686\u06cc\u0633\u062a-\u0648-\u0686\u0631\u0627-\u0627\u0647\u0645\u06cc\u062a-\u062f\u0627\u0631\u062f"},"CI/CD \u0686\u06cc\u0633\u062a \u0648 \u0686\u0631\u0627 \u0627\u0647\u0645\u06cc\u062a \u062f\u0627\u0631\u062f"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0645\u0641\u0647\u0648\u0645\nCI/CD\n\u0648 \u0627\u0647\u0645\u06cc\u062a \u0622\u0646 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.redhat.com/en/topics/devops/what-is-ci-cd"},"What is CI/CD?(redhat)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/swlh/whats-the-point-of-ci-anyway-ac3f9eaa244c"},"What\u2019s the Point of CI Anyway?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/driven-by-code/the-journey-to-ci-cd-b1872927c36b"},"The Journey to CI/CD"))),(0,r.kt)("admonition",{title:"\u200c",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=42UP1fxi2SY"},"CI/CD In 5 Minutes"),"\n\u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f.")),(0,r.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-github-actions-\u0648-\u0627\u0636\u0627\u0641\u0647-\u06a9\u0631\u062f\u0646-cicd-pipeline-\u0628\u0647-repository"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 GitHub Actions \u0648 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 CI/CD Pipeline \u0628\u0647 Repository"),(0,r.kt)("admonition",{title:"\u200c",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627\nGithub Action\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u06cc\u062f\u06cc\u0648 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0628\u0646\u06cc\u062f\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=jtzwGXw-FkU"},"Introduction to GitHub Actions"))),(0,r.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc\nCI/CD\n\u0645\u0639\u0631\u0648\u0641\u060c\nGitHub Actions\n\u0627\u0633\u062a \u06a9\u0647 \u0628\u0647 \u06a9\u0645\u06a9 \u0622\u0646\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u06cc\u06a9\nPipeline\n\u0634\u0627\u0645\u0644 \u0639\u0645\u0644\u06cc\u0627\u062a\nbuild\u060c\n\u0627\u062c\u0631\u0627\u06cc\nunit test\u0647\u0627\u060c\n\u0627\u0646\u062a\u0634\u0627\u0631\npackage\n\u0648 \u062f\u06cc\u06af\u0631 \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc \u06a9\u0647 \u062f\u0631 \u062f\u0633\u062a\u0647\u0654\nCI/CD\n\u0645\u06cc\u200c\u06af\u0646\u062c\u062f \u0631\u0627 \u0628\u0647\nRepository\n\u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645. \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0634\u0627\u0645\u0644 \u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0627\u0633\u062a:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0641\u0627\u06cc\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},"github/workflows/buildPipeline.yml."),"\n\u0631\u0627 \u062f\u0631 Repository\n\u062e\u0648\u062f \u0645\u06cc\u200c\u0633\u0627\u0632\u06cc\u0645.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0628\u0631\u0627\u06cc Pipeline\n\u062e\u0648\u062f \u06cc\u06a9 \u0646\u0627\u0645 \u062a\u0639\u0631\u06cc\u0641 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: build\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u200c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0647 \u0641\u0627\u06cc\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},"buildPipeline.yml"),"\n\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u06a9\u0647 Pipeline\n\u062f\u0631 \u0647\u0646\u06af\u0627\u0645 push\n\u0648 pull request\n\u0631\u0648\u06cc master\n\u0627\u062c\u0631\u0627 \u0634\u0648\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"on:\n    push:\n        branches: [master]\n    pull_request:\n        branches: [master]\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0645\u0631\u0627\u062d\u0644 Pipeline\n\u0631\u0627 \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u062a\u0639\u0631\u06cc\u0641 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u06a9\u0647 Pipeline\n\u0631\u0648\u06cc \u0622\u062e\u0631\u06cc\u0646 \u0648\u0631\u0698\u0646 ubuntu\n(\u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0622\u0646 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0627\u062f) \u0627\u062c\u0631\u0627 \u0634\u0648\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"jobs:\n    build:\n        runs-on: ubuntu-latest\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0633\u067e\u0633 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u06a9\u0647 CI\n\u0627\u0632 agent\u0627\u06cc\n\u0628\u0647 \u0646\u0627\u0645 ",(0,r.kt)("inlineCode",{parentName:"p"},"actions/checkout@v3"),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"steps:\n    - uses: actions/checkout@v3\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u200c",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631 ",(0,r.kt)("a",{parentName:"p",href:"https://www.edwardthomson.com/blog/building_an_action.html"},"Packaging an Action"),"\n\u0631\u0627 \u0628\u062e\u0648\u0627\u0646\u06cc\u062f \u0633\u067e\u0633 \u0633\u0631\u06cc \u0628\u0647 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/actions/checkout"},"Repository"),"\n\u0622\u0646 \u0628\u0632\u0646\u06cc\u062f."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u062f\u0631 \u0642\u062f\u0645 \u0628\u0639\u062f \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u06a9\u0647 .Net 8.0\n\u0646\u0635\u0628 \u0634\u0648\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Setup .NET\n  uses: actions/setup-dotnet@v2\n  with:\n      dotnet-version: 8.0.x\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0633\u067e\u0633 dependency\u0647\u0627\u06cc\n\u067e\u0631\u0648\u0698\u0647 restore\n\u0634\u0648\u0646\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Install dependencies\n  run: dotnet restore\n  working-directory: <path to solution>\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u200c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0628\u0647 \u062c\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"<path to solution>"),"\n\u0622\u062f\u0631\u0633 \u0641\u0648\u0644\u062f\u0631 solution\n\u062e\u0648\u062f \u0631\u0627 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u062d\u0627\u0644 solution\n\u0631\u0627 build\n\u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Build\n  run: dotnet build --configuration Release --no-restore\n  working-directory: <path to solution>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u062a\u0633\u062a\u200c\u0647\u0627 \u0631\u0627 run\n\u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'- name: Test\n  run: dotnet test --no-restore --verbosity normal --collect:"XPlat Code Coverage"\n  working-directory: <path to solution>\n')))),(0,r.kt)("p",{parentName:"li"},"\u062a\u0628\u0631\u06cc\u06a9! CI\n\u0634\u0645\u0627 \u0622\u0645\u0627\u062f\u0647\u200c\u0627\u0633\u062a."),(0,r.kt)("p",{parentName:"li"},"\u0641\u0627\u06cc\u0644 \u0631\u0627 commit\n\u06a9\u0631\u062f\u0647 \u0648 \u0631\u0648\u06cc master\n\u067e\u0648\u0634 \u06a9\u0646\u06cc\u062f."),(0,r.kt)("p",{parentName:"li"},"\u062f\u0631 Repository\n\u062e\u0648\u062f \u0648\u0627\u0631\u062f \u0645\u0646\u0648\u06cc Actions\n\u0634\u0648\u06cc\u062f\u061b \u0647\u0645\u0627\u0646\u0637\u0648\u0631 \u06a9\u0647 \u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f\u060c Pipeline\n\u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u0627\u062c\u0631\u0627 \u0627\u0633\u062a:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"actions",src:n(7658).Z,width:"1920",height:"952"})),(0,r.kt)("p",{parentName:"li"},"\u0622\u0646 \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0631\u062f\u0647 \u0648 \u0648\u0627\u0631\u062f \u0628\u062e\u0634 build\n\u0634\u0648\u06cc\u062f:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"ci",src:n(1792).Z,width:"1920",height:"950"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0627\u0641\u0632\u0648\u062f\u0646 badge\n\u0648\u0636\u0639\u06cc\u062a CI\n\u0628\u0647 README:"),(0,r.kt)("p",{parentName:"li"},"\u0627\u0632 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u062f\u06a9\u0645\u0647\u0654 Copy status badge Markdown\n\u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0631\u062f\u0647 \u0648 \u0645\u062a\u0646 \u06a9\u067e\u06cc\u200c\u0634\u062f\u0647 \u0631\u0627 \u0628\u0647 README\n\u062f\u0631 Repository\n\u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"get build badge",src:n(1260).Z,width:"1920",height:"952"})),(0,r.kt)("p",{parentName:"li"},"\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u0636\u0639\u06cc\u062a Pipeline\n\u0631\u0627 \u062f\u0631 \u0647\u0631 \u0644\u062d\u0638\u0647 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"build badge",src:n(8981).Z,width:"1920",height:"949"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0627\u0641\u0632\u0648\u062f\u0646 \u0645\u0634\u0627\u0647\u062f\u0647 \u0648\u0636\u0639\u06cc\u062a code coverage:"),(0,r.kt)("p",{parentName:"li"},"\u0628\u0627 \u0627\u06a9\u0627\u0646\u062a GitHub\n\u062e\u0648\u062f \u062f\u0631 \u0633\u0627\u06cc\u062a ",(0,r.kt)("a",{parentName:"p",href:"https://codecov.io"},"codecov.io"),"\n\u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f. \u0633\u067e\u0633 \u0628\u0647 \u0622\u062f\u0631\u0633 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://codecov.io/gh/Star-Academy/<your-repository-name>"),"\n\u0628\u0631\u0648\u06cc\u062f."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0628\u062e\u0634 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0647 \u0641\u0627\u06cc\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},"buildPipeline.yml"),"\n\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Publish code coverage reports to codecove.io\n  uses: codecov/codecov-action@v1\n  with:\n      token: ${{ secrets.CODECOV_TOKEN }}\n      files: ./**/coverage.cobertura.xml\n      fail_ci_if_error: true\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u06cc\u06a9\u200c\u0628\u0627\u0631 \u062f\u06cc\u06af\u0631 \u0635\u0641\u062d\u0647\u0654 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://codecov.io/gh/Star-Academy/<your-repository-name>"),"\n\u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f\n\u0648\u0627\u0631\u062f \u0628\u062e\u0634 Setting\n\u0634\u062f\u0647 \u0648 \u0627\u0632 \u0633\u0645\u062a \u0686\u067e\u060c \u06af\u0632\u06cc\u0646\u0647\u200c\u06cc Badge\n\u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f. \u062f\u0631 \u0635\u0641\u062d\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0628\u0627\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c Markdown\n\u0631\u0627 \u06a9\u067e\u06cc \u06a9\u0631\u062f\u0647 \u0648 \u0628\u0647 README\n\u062f\u0631 Repository\n\u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f. \u0627\u06a9\u0646\u0648\u0646 \u0645\u0634\u0627\u0647\u062f\u0647 \u062e\u0648\u0627\u0647\u06cc\u062f \u06a9\u0631\u062f \u06a9\u0647 \u062f\u0631 \u0647\u0631 \u0644\u062d\u0638\u0647\u060c \u0648\u0636\u0639\u06cc\u062a code coverage\n\u0634\u0645\u0627 \u0646\u06cc\u0632 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f:"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"code cov badge",src:n(1169).Z,width:"1920",height:"953"})))),(0,r.kt)("p",null,"\u062a\u0627 \u0628\u0647 \u0627\u06cc\u0646\u062c\u0627\u06cc \u06a9\u0627\u0631\u060c \u06a9\u0644 \u0641\u0627\u06cc\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},"buildPipeline.yml"),"\n\u0628\u0627\u06cc\u062f \u0628\u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0628\u0627\u0634\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'name: build\n\non:\n    push:\n        branches: [master]\n    pull_request:\n        branches: [master]\n\njobs:\n    build:\n        runs-on: ubuntu-latest\n\n        steps:\n            - uses: actions/checkout@v3\n\n            - name: Setup .NET\n              uses: actions/setup-dotnet@v2\n              with:\n                  dotnet-version: 8.0.x\n\n            - name: Install dependencies\n              run: dotnet restore\n              working-directory: <path to solution>\n\n            - name: Build\n              run: dotnet build --configuration Release --no-restore\n              working-directory: <path to solution>\n\n            - name: Test\n              run: dotnet test --no-restore --verbosity normal --collect:"XPlat Code Coverage"\n              working-directory: <path to solution>\n\n            - name: Publish code coverage reports to codecove.io\n              uses: codecov/codecov-action@v1\n              with:\n                  token: ${{ secrets.CODECOV_TOKEN }}\n                  files: ./**/coverage.cobertura.xml\n                  fail_ci_if_error: true\n')),(0,r.kt)("h2",{id:"\u0627\u0646\u062a\u0634\u0627\u0631-package-\u062f\u0631-nugetorg"},"\u0627\u0646\u062a\u0634\u0627\u0631 package \u062f\u0631 NuGet.org"),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647\u060c \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u0645 \u06cc\u06a9 Pipeline\n\u062c\u062f\u06cc\u062f \u0628\u0633\u0627\u0632\u06cc\u0645 \u06a9\u0647 \u0647\u0646\u06af\u0627\u0645 release\n\u06cc\u06a9 \u0648\u0631\u0698\u0646 \u062f\u0631 Repository\u060c\n\u067e\u06a9\u06cc\u062c \u0631\u0627 \u062f\u0631 ",(0,r.kt)("a",{parentName:"p",href:"https://nuget.org"},"NuGet.org"),"\n\u0645\u0646\u062a\u0634\u0631 \u06a9\u0646\u062f."),(0,r.kt)("p",null,"\u0627\u0628\u062a\u062f\u0627 \u0628\u0627\u06cc\u062f \u0645\u0634\u062e\u0635\u0627\u062a package\n\u0631\u0627 \u062f\u0631 \u0641\u0627\u06cc\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},"csproj."),"\n\u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u067e\u0631\u0648\u0698\u0647\u0654 \u062e\u0648\u062f \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f. \u0628\u062f\u06cc\u0646 \u0645\u0646\u0638\u0648\u0631\u060c \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0628\u0627\u0634\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n      <TargetFramework>net8.0</TargetFramework>\n      <PackageId>StarAcademy.CodeStar[Year].Team[TeamNumber].[LibraryName]</PackageId>\n      <Authors>[TeamMembers]</Authors>\n      <Company>Star Academy</Company>\n  </PropertyGroup>\n\n</Project>\n')),(0,r.kt)("admonition",{title:"\u200c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644\u060c \u0628\u0647 \u062c\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"[Year]"),"\n\u0633\u0627\u0644 \u0634\u0645\u0633\u06cc\u060c \u0628\u0647 \u062c\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"[TeamNumber]"),"\n\u0634\u0645\u0627\u0631\u0647\u0654 \u062a\u06cc\u0645 \u062e\u0648\u062f \u0648 \u0628\u0647 \u062c\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"[LibraryName]"),"\n\u0646\u0627\u0645 \u067e\u0631\u0648\u0698\u0647\u0654 \u062e\u0648\u062f \u0631\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f. \u0634\u0645\u0627\u0631\u0647 \u062a\u06cc\u0645 \u0628\u0647 \u0627\u06cc\u0646 \u062e\u0627\u0637\u0631 \u0628\u0627\u06cc\u062f \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0634\u0648\u062f \u06a9\u0647 \u0627\u06af\u0631 \u0646\u0627\u0645 \u067e\u0631\u0648\u0698\u0647 \u062f\u0648 \u062a\u06cc\u0645 \u06cc\u06a9\u0633\u0627\u0646 \u0628\u0648\u062f\u060c publish\n\u062f\u0686\u0627\u0631 \u0645\u0634\u06a9\u0644 \u0646\u0634\u0648\u062f \u0648 \u062f\u0631 \u0646\u0647\u0627\u06cc\u062a ",(0,r.kt)("inlineCode",{parentName:"p"},"PackageId"),"\n\u06cc\u06a9\u062a\u0627 \u0628\u0627\u0634\u062f.")),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u062f\u0627\u0645\u0647\u060c \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a Pipline\n\u0645\u0631\u0628\u0648\u0637 \u0628\u0647 publish\u060c\n\u0641\u0627\u06cc\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/publishPipeline.yml"),"\n\u0631\u0627 \u0645\u06cc\u200c\u0633\u0627\u0632\u06cc\u0645.\n\u0633\u067e\u0633 \u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0647 \u0622\u0646 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0646\u0627\u0645\u060c trigger\n\u0648 OS\n\u0645\u0631\u0628\u0648\u0637 \u0628\u0647 Pipeline\n\u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: publish\n\non:\n    release:\n        types: published\n\njobs:\n    publish:\n        runs-on: ubuntu-latest\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0646\u0635\u0628 .Net:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"steps:\n    - uses: actions/checkout@v3\n\n    - name: Setup .NET\n      uses: actions/setup-dotnet@v2\n      with:\n          dotnet-version: 8.0.x\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u06af\u0631\u0641\u062a\u0646 \u0648\u0631\u0698\u0646 release\n\u06a9\u0646\u0648\u0646\u06cc:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Get current release version\n  id: version\n  uses: pozetroninc/github-action-get-latest-release@master\n  with:\n      repository: Star-Academy/<repository name>\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u200c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u062a\u06af release\n\u0628\u0639\u0646\u0648\u0627\u0646 \u0648\u0631\u0698\u0646 \u0628\u0647 NuGet\n\u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647\u060c \u0627\u0644\u06af\u0648\u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0642\u0628\u0648\u0644 \u0648\u0631\u0698\u0646 \u0631\u0627 \u0627\u0632\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/nuget/concepts/package-versioning"},"\u0627\u06cc\u0646\u062c\u0627"),"\n\u0628\u062e\u0648\u0627\u0646\u06cc\u062f \u0648 \u062a\u06af \u0631\u0627 \u0645\u0637\u0627\u0628\u0642 \u0627\u06cc\u0646 \u0627\u0644\u06af\u0648 \u0628\u0632\u0646\u06cc\u062f.")),(0,r.kt)("admonition",{parentName:"li",title:"\u200c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0647 \u062c\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"<repository name>"),"\n\u0646\u0627\u0645 Repository\n\u062e\u0648\u062f \u0631\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"build \u0648 \u0633\u0627\u062e\u062a \u067e\u06a9\u06cc\u062c NuGet:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Build library and generate NuGet Package\n  run: dotnet pack -c Release -o artifacts -p:PackageVersion=${{ steps.version.outputs.release }}\n  working-directory: <path to classlib project>\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u200c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0647 \u062c\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"<path to classlib project>"),"\n\u0622\u062f\u0631\u0633 \u0641\u0648\u0644\u062f\u0631\u06cc \u06a9\u0647 \u0641\u0627\u06cc\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},"csproj."),"\n\u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u067e\u0631\u0648\u0698\u0647 class library\n\u062f\u0631 \u0622\u0646 \u0642\u0631\u0627\u0631 \u062f\u0627\u0631\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0627\u0646\u062a\u0634\u0627\u0631 \u067e\u06a9\u06cc\u062c NuGet:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Publish NuGet Package\n  run: dotnet nuget push ./**/*.nupkg -k ${{ secrets.NUGET_API_KEY }} -s https://api.nuget.org/v3/index.json\n")))),(0,r.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u067e\u0633\u060c \u0647\u0631 \u06af\u0627\u0647 \u062f\u0631 Repository\n\u062e\u0648\u062f \u062a\u06af \u0628\u0632\u0646\u06cc\u062f\u060c Pipeline\n\u0641\u0648\u0642 trigger\n\u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u067e\u06a9\u06cc\u062c \u0634\u0645\u0627 push\n\u0645\u06cc\u200c\u0634\u0648\u062f. \u0647\u0645\u0686\u0646\u06cc\u0646 \u062f\u0631 \u0645\u0646\u0648\u06cc Actions\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u0636\u0639\u06cc\u062a publish\n\u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,r.kt)("p",null,"\u067e\u06a9\u06cc\u062c \u0645\u0646\u062a\u0634\u0631 \u0634\u062f\u0647\u0654 \u062e\u0648\u062f \u0631\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631 \u0622\u062f\u0631\u0633 ",(0,r.kt)("inlineCode",{parentName:"p"},"nuget.org/packages/[PackageId]"),"\n\u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,r.kt)("admonition",{title:"\u200c",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631 ",(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/dotnet/dotnet-loves-github-actions/"},"Intro to GitHub Actions for .NET"),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f.")),(0,r.kt)("h2",{id:"\u0633\u0627\u062e\u062a-\u06cc\u06a9-console-app-\u0628\u0631\u0627\u06cc-\u067e\u0631\u0648\u0698\u0647-\u0633\u0631\u0686"},"\u0633\u0627\u062e\u062a \u06cc\u06a9 Console App \u0628\u0631\u0627\u06cc \u067e\u0631\u0648\u0698\u0647 \u0633\u0631\u0686"),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634\u060c \u06cc\u06a9 solution\n\u062f\u06cc\u06af\u0631 \u0628\u0633\u0627\u0632\u06cc\u062f\u060c \u0648 \u062f\u0631 \u0622\u0646 \u0628\u0627 Net Cli.\n\u06cc\u06a9 console app\n\u0628\u0633\u0627\u0632\u06cc\u062f. \u062f\u0631 \u067e\u0648\u0634\u0647 \u067e\u0631\u0648\u0698\u0647 \u06a9\u0646\u0633\u0648\u0644\u060c command\n\u0632\u06cc\u0631 \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u067e\u06a9\u06cc\u062c \u0633\u0631\u0686 \u0634\u0645\u0627 \u0628\u0647 \u067e\u0631\u0648\u0698\u0647 \u06a9\u0646\u0633\u0648\u0644 \u0627\u0636\u0627\u0641\u0647 \u0634\u0648\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet add package [packageId]\n")),(0,r.kt)("p",null,"\u0628\u0627 \u0627\u06cc\u0646 command\u060c\n\u067e\u06a9\u06cc\u062c \u0628\u0647 \u067e\u0631\u0648\u0698\u0647 \u0634\u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u06a9\u0644\u0627\u0633\u200c\u0647\u0627\u06cc \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f. \u0647\u0645\u0686\u0646\u06cc\u0646 \u0627\u06af\u0631 \u067e\u06a9\u06cc\u062c \u062e\u0648\u062f \u0631\u0627 update\n\u06a9\u0631\u062f\u0647 \u0628\u0627\u0634\u06cc\u062f\u060c \u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 command\u060c\n\u0646\u0633\u062e\u0647 \u062c\u062f\u06cc\u062f \u067e\u06a9\u06cc\u062c \u0628\u0647 \u067e\u0631\u0648\u0698\u0647 \u0634\u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("p",null,"\u062d\u0627\u0644 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u06a9\u06cc\u062c \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0633\u0631\u0686\u200c\u062a\u0627\u0646\u060c \u06cc\u06a9 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 \u0633\u0631\u0686 \u062a\u062d\u062a \u06a9\u0646\u0633\u0648\u0644 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u062f."))}m.isMDXComponent=!0},7658:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase06-actions-8c0c65c58498c133573e138b1ba53efe.png"},8981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase06-build-badge-9897ddfb9a8ce38def82a627a23ea0d1.png"},1792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase06-ci-75b9b1c62f3157effc3f3f082454311d.png"},1169:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase06-codcov-badge-3ccae870c6a8b1e5213d3a7d0a1f968f.png"},1260:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/phase06-get-build-badge-46495d092a6a4cdee81d6f36eb868623.png"}}]);