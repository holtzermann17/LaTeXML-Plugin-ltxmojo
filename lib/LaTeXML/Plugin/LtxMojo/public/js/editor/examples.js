function load_examples(examples) {
examples['box'] = [
'\\documentclass{article}',
'\\setlength{\\textwidth}{200pt}',
'\\begin{document}',
'\\raisebox{0pt}[0pt][0pt]{\\Large%',
'  \\textbf{Aaaa\\raisebox{-0.3ex}{a}%',
'    \\raisebox{-0.7ex}{aa}%',
'    \\raisebox{-1.2ex}{r}%',
'    \\raisebox{-2.2ex}{g}%',
'    \\raisebox{-4.5ex}{h}',
'  }',
'}',
'he shouted but not even the next',
'one in line noticed that something',
'terrible had happened to him.',
'','','Source: \\url{http://en.wikibooks.org/wiki/LaTeX/Boxes#raisebox}','\\end{document}'].join('\n');
examples['clc'] = ["Behold: $\\int_0^\\infty x\\,dx$ is an integral"];

examples['eqn'] = ['\\section{The Lorenz Equations}',
'\\[\\begin{aligned}',
'\\dot{x} & = \\sigma(y-x) \\\\',
'\\dot{y} & = \\rho x - y - xz \\\\',
'\\dot{z} & = -\\beta z + xy',
'\\end{aligned} \\]',
'','\\section{The Cauchy-Schwarz Inequality}',
'\\[ \\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right) \\]',
'\\section{A Cross Product Formula}',
'\\[\\mathbf{V}_1 \\times \\mathbf{V}_2 =  \\begin{vmatrix}',
'\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\',
'\\frac{\\partial X}{\\partial u} &  \\frac{\\partial Y}{\\partial u} & 0 \\\\',
'\\frac{\\partial X}{\\partial v} &  \\frac{\\partial Y}{\\partial v} & 0',
'\\end{vmatrix}  \\]','',
'The probability of getting $\\(k\\)$ heads when flipping $\\(n\\)$ coins is: ',
'\\[P(E) = {n \\choose k} p^k (1-p)^{ n-k} \\]',
'','\\section{An Identity of Ramanujan}',
'\\[ \\frac{1}{\\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\\frac25 \\pi}} =',
'1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}}',
'{1+\\frac{e^{-8\\pi}} {1+\\ldots} } } } \\]',
'','\\section{A Rogers-Ramanujan Identity}',
'\\[  1 +  \\frac{q^2}{(1-q)}+\\frac{q^6}{(1-q)(1-q^2)}+\\cdots =',
'\\prod_{j=0}^{\\infty}\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},',
'\\quad\\quad \\text{for} |q|<1. \\]',
'','\\section{Maxwell\'s Equations}',
'\\[  \\begin{aligned}',
'\\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} & = \\frac{4\\pi}{c}\\vec{\\mathbf{j}} \\\\',
'\\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\',
'\\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\',
'',
'\\nabla \\cdot \\vec{\\mathbf{B}} & = 0 \\end{aligned}\\]',
'','','Source: \\url{http://www.mathjax.org/demos/tex-samples/}'].join('\n');

examples['nar'] = ['\\documentclass{amsart}',
'',
'\\newtheorem{theorem}{Theorem}[section]',
'\\newtheorem{lemma}[theorem]{Lemma}',
'',
'\\theoremstyle{definition}',
'\\newtheorem{definition}[theorem]{Definition}',
'\\newtheorem{example}[theorem]{Example}',
'\\newtheorem{xca}[theorem]{Exercise}',
'',
'\\theoremstyle{remark}',
'\\newtheorem{remark}[theorem]{Remark}',
'\\newtheorem{corollary}{Corollary}',
'\\newtheorem*{corollary*}{Corollary}',
'',
'\\numberwithin{equation}{section}',
'',
'\\begin{document}',
'\\title{Sample amsart}',
'\\author{Joe Blow}',
'\\address{Somewhere, USA}',
'\\curraddr{same as above}',
'\\email{joe@blow}',
'\\thanks{My Mommy.}',
'',
'\\author{Frank Zappa}',
'\\address{Baltimore}',
'',
'\\subjclass[2000]{Primary }',
'\\subjclass{Other stuff }',
'',
'\\keywords{ams,article,markup}',
'',
'%\\date{\\today}',
'\\date{February 14, 2013}',
'',
'\\dedicatory{To all those who went before}',
'',
'\\begin{abstract}',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'\\end{abstract}',
'',
'\\maketitle',
'',
'\\section{Introduction}',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'',
'\\begin{equation}',
' a + b,',
'\\end{equation}',
'',
'\\begin{equation}',
' c + d,',
'\\end{equation}',
'',
'\\begin{figure}',
'\\begin{centering}',
'A Figure\\\\',
'\\end{centering}',
'\\caption{A Figure}',
'\\end{figure}',
'',
'\\begin{table}',
'\\begin{centering}',
'\\begin{tabular}{r|cc}',
'Heading & Foo & Bar\\\\\\hline',
'a & $x$ & $x^2$\\\\',
'b & $y^2$ & $y$\\\\',
'\\end{tabular}\\\\',
'\\end{centering}',
'\\caption{A Table}',
'\\end{table}',
'',
'\\begin{enumerate}',
' \\item one',
' \\item two',
'   \\begin{enumerate}',
'    \\item one',
'    \\item two',
'   \\end{enumerate}',
'\\end{enumerate}',
'',
'\\begin{description}',
'\\item[A thing] with some descriptive text.',
'\\item[Another] Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
'\\item[And yet] blah, blah. Moreover',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
'\\end{description}',
'',
'\\section{A Math Section}',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'',
' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'',
'\\begin{equation*}',
' a=b',
'\\end{equation*}',
'',
'\\begin{equation}',
' a=b',
'\\end{equation}',
'',
'\\begin{equation}',
'\\begin{split}',
'a &= b + c - d\\\\',
'  & \\quad + e - f\\\\',
'  & = g + h\\\\',
'  & = i',
'\\end{split}',
'\\end{equation}',
'',
'\\begin{multline}',
'a+b+c+d+e+f\\\\',
'+i+j+k+l+m+n',
'\\end{multline}',
'',
'\\begin{gather}',
'a_1=b_1+c_1 \\\\',
'a_2=b_2+c_2-d_2+e_2',
'\\end{gather}',
'',
'\\begin{align}',
'a_1&=b_1+c_1 \\\\',
'a_2&=b_2+c_2-d_2+e_2',
'\\end{align}',
'',
'\\begin{align}',
'a_{11} &= b_{11} &',
'  a_{12} &= b_{12} \\\\',
'a_{21} &= b_{21} &',
'  a_{22} &= b_{22}+c_{22}',
'\\end{align}',
'',
'Some \\text{text}',
'\\begin{equation}',
'a = \\text{something}',
'\\end{equation}',
'',
'\\begin{corollary}',
' Whatever!',
'\\end{corollary}',
'\\begin{corollary*}',
'And whatever.',
'\\end{corollary*}',
'',
'\\end{document}',
'',
'\\begin{flalign*}',
'a_{11} &= b_{11} &',
'  a_{12} &= b_{12} \\\\',
'a_{21} &= b_{21} &',
'  a_{22} &= b_{22}+c_{22}',
'\\end{flalign*}',
'',
'',
'\\subsection{A subsection}',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'\\subsection{A subsubsection}',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
'',
'',
'',
'\\paragraph{A Paragraph}',
' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'',
'\\section{\\itshape Section with explicit font}',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'',
'\\end{document}'].join('\n');
examples['tbl'] = ['\\section{First Example}','\\begin{tabular}{|c|ccc|r|}',
'	\\hline',
'$k$ &  $x_1^k$    &   $x_2^k$  & $x_3^k$   & remarks  \\\\',
'	\\hline',
'0   & -0.3 & 0.6 & 0.7  &  \\\\',
'1   & 0.47102965 & 0.04883157 & -0.53345964  & *\\\\',
'2   & 0.49988691 & 0.00228830 & -0.52246185 & $s_3$ \\\\',
'3   & 0.49999976 & 0.00005380 & -0.52365600  & \\\\',
'4   & 0.5 & 0.00000307 & -0.52359743  & $\\epsilon < 10^{-5}$ \\\\',
'7   & 0.5 & 0 & -0.52359878  & $\\epsilon < \\xi $ \\\\',
'	\\hline',
'\\end{tabular}',
'\\section{Second Example}',
'\\begin{tabular}{|c|r@{.}lr@{.}lr@{.}l||r|}',
'	\\hline',
'\\multicolumn{8}{|c|}',
'	{Iteration $k$ of $f(x_n)$} \\\\',
'\\textbf{\\em k}',
'	& \\multicolumn{2}{c}{$x_1^k$}',
'	& \\multicolumn{2}{c}{$x_2^k$}',
'	& \\multicolumn{2}{c||}{$x_3^k$}',
'	& remarks \\\\ \\hline \\hline',
'0   & -0&3                 & 0&6                 &  0&7   & - \\\\',
'1   &  0&47102965 & 0&04883157 & -0&53345964  & $\\delta<\\epsilon$ \\\\',
'2   &  0&49988691 & 0&00228830 & -0&52246185  & $\\delta < \\varepsilon$ \\\\',
'3   &  0&49999976 & 0&00005380 & -0&523656   &   $N$ \\\\',
'4   &  0&5                 & 0&00000307 & -0&52359743  & \\\\',
'$\\vdots$	& \\multicolumn{2}{c}{$\\vdots$}',
'	& \\multicolumn{2}{c}{$\\ddots$}',
'	& \\multicolumn{2}{c||}{$\\vdots$}  & \\\\',
'7   &  0&5   & 0&0    & \\textbf{-0}&\\textbf{52359878}',
'		 & $\\delta<10^{-8}$ \\\\ \\hline',
'\\end{tabular}',
'','Source: \\url{http://amath.colorado.edu/documentation/LaTeX/reference/tables/}'].join('\n');


examples['clr'] = [
'The 68 standard colors known to dvips\\vspace{0.5ex}',
'\\begin{center}\\begin{tabular}{|l|l|l|l|}',
'\\hline',
'{\\color{Apricot} Apricot}&',
'{\\color{Aquamarine} Aquamarine}&',
'{\\color{Bittersweet} Bittersweet}&',
'{\\color{Black} Black}\\\\ \\hline',
'{\\color{Blue} Blue}&',
'{\\color{BlueGreen} BlueGreen}&',
'{\\color{BlueViolet} BlueViolet}&',
'{\\color{BrickRed} BrickRed}\\\\ \\hline',
'{\\color{Brown} Brown}&',
'{\\color{BurntOrange} BurntOrange}&',
'{\\color{CadetBlue} CadetBlue}&',
'{\\color{CarnationPink} CarnationPink}\\\\ \\hline',
'{\\color{Cerulean} Cerulean}&',
'{\\color{CornflowerBlue} CornflowerBlue}&',
'{\\color{Cyan} Cyan}&',
'{\\color{Dandelion} Dandelion}\\\\ \\hline',
'{\\color{DarkOrchid} DarkOrchid}&',
'{\\color{Emerald} Emerald}&',
'{\\color{ForestGreen} ForestGreen}&',
'{\\color{Fuchsia} Fuchsia}\\\\ \\hline',
'{\\color{Goldenrod} Goldenrod}&',
'{\\color{Gray} Gray}&',
'{\\color{Green} Green}&',
'{\\color{GreenYellow} GreenYellow}\\\\ \\hline',
'{\\color{JungleGreen} JungleGreen}&',
'{\\color{Lavender} Lavender}&',
'{\\color{LimeGreen} LimeGreen}&',
'{\\color{Magenta} Magenta}\\\\ \\hline',
'{\\color{Mahogany} Mahogany}&',
'{\\color{Maroon} Maroon}&',
'{\\color{Melon} Melon}&',
'{\\color{MidnightBlue} MidnightBlue}\\\\ \\hline',
'{\\color{Mulberry} Mulberry}&',
'{\\color{NavyBlue} NavyBlue}&',
'{\\color{OliveGreen} OliveGreen}&',
'{\\color{Orange} Orange}\\\\ \\hline',
'{\\color{OrangeRed} OrangeRed}&',
'{\\color{Orchid} Orchid}&',
'{\\color{Peach} Peach}&',
'{\\color{Periwinkle} Periwinkle}\\\\ \\hline',
'{\\color{PineGreen} PineGreen}&',
'{\\color{Plum} Plum}&',
'{\\color{ProcessBlue} ProcessBlue}&',
'{\\color{Purple} Purple}\\\\ \\hline',
'{\\color{RawSienna} RawSienna}&',
'{\\color{Red} Red}&',
'{\\color{RedOrange} RedOrange}&',
'{\\color{RedViolet} RedViolet}\\\\ \\hline',
'{\\color{Rhodamine} Rhodamine}&',
'{\\color{RoyalBlue} RoyalBlue}&',
'{\\color{RoyalPurple} RoyalPurple}&',
'{\\color{RubineRed} RubineRed}\\\\ \\hline',
'{\\color{Salmon} Salmon}&',
'{\\color{SeaGreen} SeaGreen}&',
'{\\color{Sepia} Sepia}&',
'{\\color{SkyBlue} SkyBlue}\\\\ \\hline',
'{\\color{SpringGreen} SpringGreen}&',
'{\\color{Tan} Tan}&',
'{\\color{TealBlue} TealBlue}&',
'{\\color{Thistle} Thistle}\\\\ \\hline',
'{\\color{Turquoise} Turquoise}&',
'{\\color{Violet} Violet}&',
'{\\color{VioletRed} VioletRed}&',
'{\\color{White} White}\\\\ \\hline',
'{\\color{WildStrawberry} WildStrawberry}&',
'{\\color{Yellow} Yellow}&',
'{\\color{YellowGreen} YellowGreen}&',
'{\\color{YellowOrange} YellowOrange}\\\\ \\hline',
'\\end{tabular}',
'\\end{center}',
'Source: \\url{http://people.oregonstate.edu/~peterseb/tex/samples/color-package.html}'].join('\n');


examples['xii'] = ['Source: \\url{http://ctan.org/pkg/xii}','','',
'\\let~\\catcode~`76~`A13~`F1~`j00~`P2jdefA71F~`7113jdefPALLF',
'PA\'\'FwPA;;FPAZZFLaLPA//71F71iPAHHFLPAzzFenPASSFthP;A$$FevP',
'A@@FfPARR717273F737271P;ADDFRgniPAWW71FPATTFvePA**FstRsamP',
'AGGFRruoPAqq71.72.F717271PAYY7172F727171PA??Fi*LmPA&&71jfi',
'Fjfi71PAVVFjbigskipRPWGAUU71727374 75,76Fjpar71727375Djifx',
':76jelse&U76jfiPLAKK7172F71l7271PAXX71FVLnOSeL71SLRyadR@oL',
'RrhC?yLRurtKFeLPFovPgaTLtReRomL;PABB71 72,73:Fjif.73.jelse',
'B73:jfiXF71PU71 72,73:PWs;AMM71F71diPAJJFRdriPAQQFRsreLPAI',
'I71Fo71dPA!!FRgiePBt\'el@ lTLqdrYmu.Q.,Ke;vz vzLqpip.Q.,tz;',
';Lql.IrsZ.eap,qn.i. i.eLlMaesLdRcna,;!;h htLqm.MRasZ.ilk,%',
's$;z zLqs\'.ansZ.Ymi,/sx ;LYegseZRyal,@i;@ TLRlogdLrDsW,@;G',
'LcYlaDLbJsW,SWXJW ree @rzchLhzsW,;WERcesInW qt.\'oL.Rtrul;e',
'doTsW,Wk;Rri@stW aHAHHFndZPpqar.tridgeLinZpe.LtYer.W,:'].join('\n');

examples['tur'] = [
'\\documentclass{article}',
'\\usepackage{turing}',
'',
'\\begin{document}',
'% Part of the turing.sty documentation, created by ',
'% Dr. Mark Schaefer, Uni Augsburg',
'% We want to add 1 to 2 and get 3 (11) in binary',
'\\newtm<next,stop>(1,\\#,1,0)',
'',
'%The definition of a Turing machine which adds two binary numbers.',
'\\turingrules{%',
'(next,0,next,0,R),%',
'(next,1,next,1,R),%',
'(next,0\',next,0\',R),%',
'(next,1\',next,1\',R),%',
'(next,\\#,next,\\#,R),%',
'(next,-,check,-,L),%',
'%',
'(check,0,prepadd0,-,L),%',
'(check,1,prepadd1,-,L),%',
'(check,\\#,cleanup,-,L),%',
'%',
'(prepadd0,0,prepadd0,0,L),%',
'(prepadd0,1,prepadd0,1,L),%',
'(prepadd0,\\#,add0,\\#,L),%',
'(add0,0\',add0,0\',L),%',
'(add0,1\',add0,1\',L),%',
'(add0,-,next,0\',R),%',
'(add0,0,next,0\',R),%',
'(add0,1,next,1\',R),%',
'%',
'(prepadd1,0,prepadd1,0,L),%',
'(prepadd1,1,prepadd1,1,L),%',
'(prepadd1,\\#,add1,\\#,L),%',
'(add1,0\',add1,0\',L),%',
'(add1,1\',add1,1\',L),%',
'(add1,0,next,1\',R),%',
'(add1,1,propadd1,0\',L),%',
'(add1,-,next,1\',R),%',
'(propadd1,0,next,1,R),%',
'(propadd1,1,propadd1,0,L),%',
'(propadd1,-,next,1,R),%',
'%',
'(cleanup,0,cleanup,0,L),%',
'(cleanup,1,cleanup,1,L),%',
'(cleanup,0\',cleanup,0,L),%',
'(cleanup,1\',cleanup,1,L),%',
'(cleanup,-,stop,-,H)%',
'}',
'',
'\\showtm',
'',
'\\runtm',
'',
'\\end{document}',
].join('\n');

examples['wik'] = [
'\\usepackage{wiki}',
'\\begin{document}',
'\\wikimarkup',
'','== Section One ==',
'An introduction to wiki.sty',
'=== A subsection ===',
'',
'==== And a subsubsection ====',
'',
'== Examples ==',
'',
'Font styling: \'\'italic\'\', \'\'\'bold\'\'\' it all works!',
'',
'* Future work: itemize',
'','* also enumerate',
'','* etc.',
'','Enjoy! % You need trailing text to close the implicit itemize',
'%No trailing whitespace or you get Fatals errors!!%',
'\\end{document}'].join('\n');

examples['met'] = ['\\usepackage{planetmath-specials}',
'\\begin{document}',
'%% BEGIN METADATA BLOCK',
'\\pmcanonicalname{ZipfsLaw}',
'\\pmrecord{3}{3422}',
'\\pmowner{akrowne}{2}',
'\\pmmodifier{akrowne}{2}',
'\\pmcreated{2002-09-05 14:18:48.912026-04}',
'\\pmmodified{2002-09-05 17:58:34.348745-04}',
'\\pmtitle{Zipf\'s law}',
'\\pmtype{Definition}',
'\\pmcomment{fixing LaTeX tabular-in-caption lockup}',
'\\pmauthor{akrowne}{2}',
'\\pmclassification{msc}{60E05}',
'\\pmclassification{msc}{68P20}',
'\\pmclassification{msc}{94A99}',
'%% END METADATA BLOCK',
'This example demonstrates embedding document metadata via {\\LaTeX} macros, using the vocabulary and syntax for the encyclopedia \\href{www.planetmath.org}{PlanetMath.org}.',
'The concrete example is taken from the \\href{http://planetmath.org/encyclopedia/ZipfsLaw.html}{Zipf\'s Law} article.',
'','',
'View the generated source to explore the result metadata as {\\color{blue}HTML+RDFa}.',
'\\end{document}'].join('\n');

examples['wgr'] = [
'\\usepackage{webgraphic}',
'\\begin{document}',
'Welcome to \\\\',
'\\def\\w{450}',
'\\webgraphic[width=\\w]{img/external/raptor-black.png}',
'\\url{http://perl.org}',
'\\end{document}'].join('\n');

examples['tikz-basic'] = ['\\documentclass{article}\\usepackage{tikz}\\begin{document}',
'\\title{A TikZ gallery of basic examples}',
'\\section{Connecting squares}',
'\\begin{tikzpicture}',
'\\draw (0,0) -- +(1,0) -- +(1,1) -- +(0,1) -- cycle;',
'\\draw (2,0) -- +(1,0) -- +(1,1) -- +(0,1) -- cycle;',
'\\draw (1.5,1.5) -- +(1,0) -- +(1,1) -- +(0,1) -- cycle;',
'\\draw (0,0) -- (1,1) {[rounded corners] -- (2,0) -- (3,1)} -- (3,0) -- (2,1);',
'\\end{tikzpicture}',
'',
'\\section{A Trapezoid with rounded corners}',
'\\begin{tikzpicture}',
'\\draw (0,0) [rounded corners=10pt] -- (1,1) -- (2,1)',
'[sharp corners] -- (2,0)',
'[rounded corners=5pt] -- cycle;',
'\\end{tikzpicture}',
'',
'\\section{A Unit Circle}',
'\\begin{tikzpicture}',
'\\draw[clip] (0,0) circle (1cm);',
'\\end{tikzpicture}',
'',
'\\section{Plot of $\\sin(x)$}',
'\\begin{tikzpicture}',
'\\draw plot (\\x,{sin(\\x r)});',
'\\end{tikzpicture}',
'',
'\\section{Some plots}',
'\\begin{tikzpicture}',
'\\draw (0,0) grid (10,10);',
'\\pgfxycurve(0,0)(3,2)(1,4)(10,3)',
'\\pgfstroke',
'\\pgfxycurve(0,0)(1,3)(5,4)(7,9)',
'\\pgfxycurve(0,0)(1,3)(7,4)(0,9)',
'\\pgffill',
'\\end{tikzpicture}\\end{document}'].join('\n');

examples['tikz-ac-drive-voltage'] = [
'% Behaviour of the stator voltage and the RMS-value of the stator',
'% flux as a function of speed in scalar control.',
'% Author: Erno Pentzin (2013)',
'\\documentclass{article}',
'\\usepackage{amsmath} % Required for \\varPsi below',
'\\usepackage{tikz}',
'\\begin{document}',
'\\begin{tikzpicture}',
'',
'% horizontal axis',
'\\draw[->] (0,0) -- (6,0) node[anchor=north] {$f/f_N$};',
'% labels',
'\\draw    (0,0) node[anchor=north] {0}',
'    (2,0) node[anchor=north] {1}',
'    (4,0) node[anchor=north] {2};',
'% ranges',
'\\draw (1,3.5) node{{\\scriptsize Constant flux}}',
'    (4,3.5) node{{\\scriptsize Field weakening}};',
'',
'% vertical axis',
'\\draw[->] (0,0) -- (0,4) node[anchor=east] {$U_s,\\varPsi_s$};',
'% nominal speed',
'\\draw[dotted] (2,0) -- (2,4);',
'',
'% Us',
'\\draw[thick] (0,0) -- (2,2) -- (6,2);',
'\\draw (1,1.5) node {$U_s$}; %label',
'',
'% Psis',
'\\draw[thick,dashed] (0,3) -- (2,3) parabola[bend at end] (6,1);',
'\\draw (2.5,3) node {$\\varPsi_s$}; %label',
'',
'\\end{tikzpicture}',
'','Source: \\url{http://www.texample.net/tikz/examples/ac-drive-voltage/}',
'\\end{document}'].join('\n');

examples['tikz-rotated-triangle'] = [
'\\documentclass{article}',
'\\usepackage[usenames,dvipsnames,pdftex]{xcolor}',
'\\usepackage{tikz}',
'\\begin{document}',
'\\newcounter{density}',
'\\setcounter{density}{20}',
'\\begin{tikzpicture}',
'    \\def\\couleur{MidnightBlue}',
'    \\path[coordinate] (0,0)  coordinate(A)',
'                ++( 60:12cm) coordinate(B)',
'                ++(-60:12cm) coordinate(C);',
'    \\draw[fill=\\couleur!\\thedensity] (A) -- (B) -- (C) -- cycle;',
'    \\foreach \\x in {1,...,15}{%',
'        \\pgfmathsetcounter{density}{\\thedensity+10}',
'        \\setcounter{density}{\\thedensity}',
'        \\path[coordinate] coordinate(X) at (A){};',
'        \\path[coordinate] (A) -- (B) coordinate[pos=.15](A)',
'                            -- (C) coordinate[pos=.15](B)',
'                            -- (X) coordinate[pos=.15](C);',
'        \\draw[fill=\\couleur!\\thedensity] (A)--(B)--(C)--cycle;',
'    }',
'\\end{tikzpicture}',
'% Name : RotateTriangle',
'% Encoding : utf8',
'% Engine : pdflatex',
'% Author: Alain Matthes',
'','','Source: \\url{http://www.texample.net/tikz/examples/rotated-triangle/}',
'\\end{document}'].join('\n');

examples['psp'] = ['\\documentclass{article}',
'\\usepackage{pstricks}',
'\\begin{document}',
'{\\color{red}\\textbf{Warning:}} {\\color{blue}pstricks} support is experimental and at a proof-of-concept stage.\\',
'\\begin{center}',
'\\begin{pspicture}(-1,-0.5)(4,3.5)',
'\\pspolygon[linecolor=blue](0,0)(0,3)(3,1)',
'\\rput(0,-0.25){$A$}',
'\\rput(3,0.75){$B$}',
'\\rput(0,3.25){$C$}',
'\\psline(0,0)(-2.5,1.35)(0,3)',
'\\psline(-2.5,1.35)(3,1)',
'\\rput(-2.8,1.3){$P$}',
'\\rput(0.75,0.85){$F$}',
'\\psline(0,3)(0.7,1.15)(0,0)',
'\\psdot(-0.7,1.23)',
'\\rput(-0.55,1.5){$Q$}',
'\\psline(0,0)(-0.7,1.2)',
'\\psdot[linecolor=red](0.7,1.15)',
'\\end{pspicture}',
'\\end{center}',
'\\end{document}'].join('\n');

examples['utf'] = [
'\\documentclass{article}',
'\\usepackage[utf8]{inputenc} % (optional, but recommended)',
'\\begin{document}',
'',
'Borrowed from the \\href{http://trac.edgewall.org/wiki/TracUnicode}{Trac Unicode Examples page}.',
'\\begin{table}\\caption{LaTeXML Native Unicode Support}',
'\\begin{tabular}{|ll|}\\hline',
'Arabic & تراك يقوم بحفظ كل الكلمات باستخدام صيغة UTF-8، بما في ذلك الكلمات المستخدمة في صفحات التيكت والويكي.\\\\',
'',
'Bulgarian & Българският език работи ли?\\\\',
'',
'Česky & Čeština v kódování UTF-8, žádný problém.\\\\',
'',
'Chinese (Traditional) & 繁體中文, 漢字測試;\\\\',
'',
'Chinese (Simplified) & 简体中文，汉字测试 \\\\',
'',
'Croatian & Ako podržava srpski i slovenski mora podržavati i Hrvatski - čćžšđ ČĆŽŠĐ\\\\',
'',
'English & Yes indeed, Trac supports English. Fully.\\\\',
'',
'Français & Il est possible d\'écrire en Français : à, ç, û, ...\\\\',
'',
'German & Trac-Wiki muß auch deutsche Umlaute richtig anzeigen: ö, ä, ü, Ä, Ö, Ü; und das scharfe ß\\\\',
'',
'Greek & Τα Ελληνικά υποστηρίζονται επαρκώς επίσης.\\\\',
'',
'Hebrew & אני יכול לאכול זכוכית וזה לא מזיק לי\\\\',
'',
'Hindi & अब हिन्दी में।\\\\',
'',
'Hungarian & Árvíztűrő tükörfúrógép\\\\',
'',
'Icelandic & Ævar sagði við ömmu sína: Sjáðu hvað ég er stór!\\\\',
'',
'Japanese & 漢字 ひらがな カタカナ ﾊﾝｶｸｶﾅ 日本語試験\\\\',
'',
'Korean & 이번에는 한글로 써보겠습니다. 잘 보이나요? 한글\\\\',
'',
'Latvian & Latviešu valoda arī strādā!\\\\',
'',
'Lithuanian & Sudalyvaukime ir mes. Ar veikia lietuviškos raidės? ąčęėįšųūž ĄČĘĖĮŠŲŪŽ Žinoma, kad veikia :) Kas tie mes?\\\\',
'',
'Persian (Farsi) & این یک متن فارسی است ولی امکان نوشتن مستقیم فارسی نیست چون حالت متن از راست به چپ و جود ندارد برای فارسی نوشتن باید از HTML استفاده کنید.',
'',
'این نمونه یک متن از راست به چپ فارسی است که در HTML نوشته شده تا اعداد 12345 و حروف لاتین ABCDEF در محل خودشان نمایش داده شوند.\\\\',
'',
'Polish & Pchnąć w tę łódź jeża lub osiem skrzyń fig; Nocna gżegżółka zawsze dzienną przekuka.\\\\',
'',
'Portuguese & É possível guardar caracteres especias da língua portuguesa, incluindo o símbolo da moeda européia \'€\', trema \'ü\', crase \'à\', agudos \'áéíóú\', circunflexos \'âêô\', til \'ãõ\', cedilha \'ç\', ordinais \'ªº\', grau \'°¹²³\'.\\\\',
'',
'Russian & Проверка русского языка: кажется работает... И буква "ё" есть...\\\\',
'',
'Serbian & Podržan, uprkos činjenici da se za njegovo pisanje koriste чак два алфабета.\\\\',
'',
'Slovenian & Ta suhi škafec pušča vodo že od nekdaj!\\\\',
'',
'Spanish & Esto es un pequeño texto en Español, donde el veloz murciélago hindú comía cardlllo y kiwi\\\\',
'',
'Swedish & Räven raskar över isen med luva på.\\\\',
'',
'Thai & Trac แสดงภาษาไทยได้อย่างถูกต้อง!\\\\',
'',
'Ukrainian & Перевірка української мови...\\\\',
'',
'Urdu & ٹریک اردو بھی سپورٹ کرتا ہے۔\\\\',
'',
'Vietnamese & Viết tiếng Việt cũng được. \\\\ \\hline',
'',
'\\end{tabular}',
'\\end{table}',
'',
'\\end{document}'].join("\n");

examples['bab'] = [
'\\documentclass[a4paper]{book}',
'\\usepackage[german,czech,italian]{babel}',
'',
'\\begin{document}',
'\\frontmatter',
'\\chapter{Introduzione}',
'...',
'\\mainmatter',
'\\selectlanguage{czech}',
'\\chapter{Czech Chapter}',
'',
'\\foreignlanguage{german}{German Text: Babel mu\\ss auch deutsche Umlaute richtig',
'anzeigen: "o, "a, "u, "A, "O, "U; und das scharfe \\ss}',
'',
'\\selectlanguage{italian}',
'\\chapter{Italian Chapter}',
'...',
'\\appendix',
'\\chapter{Appendice}',
'...',
'\\end{document}',
].join("\n");

examples['rand'] = [
'\\documentclass{article}',
'\\usepackage{lcg,forloop}',
'\\newtoks\\dierckxtoks',
'\\newcounter{row_number}',
'',
'\\begin{document}',
'',
'\\chgrand[first=1, last=200, counter=kids]',
'\\dierckxtoks={}',
'',
'\\forloop{row_number}{1}{\\value{row_number} < 10}{% ',
'  \\rand',
'  \\edef\\x{\\the\\dierckxtoks\\arabic{kids} \\noexpand\\\\}',
'  \\dierckxtoks\\expandafter{\\x}%',
'} ',
'\\begin{table}',
'\\begin{center}',
'\\begin{tabular}{|l|}\\hline',
'\\the\\dierckxtoks',
'\\hline',
'\\end{tabular}',
'\\end{center}',
'\\caption{Ten pseudo-random numbers between 1 and 200}',
'\\end{table}',
'',
'\\end{document}',
].join("\n");

}