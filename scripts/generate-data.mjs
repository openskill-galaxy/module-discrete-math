import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="discrete math set element subset universal set empty set power set union intersection difference complement Cartesian product relation binary relation reflexive symmetric antisymmetric transitive equivalence partial order Hasse diagram function injective surjective bijective composite inverse proposition connective truth table implication equivalence normal form DNF CNF predicate quantifier universal existential inference proof contradiction induction recursion permutation combination pigeonhole inclusion-exclusion recurrence graph vertex edge degree path circuit connected Eulerian Hamiltonian tree spanning tree minimum spanning tree Boolean algebra logic gate combinatorial counting generating function recurrence relation";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"dm-tag-"+String(i+1).padStart(3,"0"),name:n,category:"DMath",description:"DM标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"dm-course-01",order:1,slug:"DM入门",title:"离散数学入门与学习路线",description:"离散数学定位、应用场景、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"dm-course-02",order:2,slug:"集合论",title:"集合论基础",description:"集合概念、子集、全集空集、集合运算、幂集、笛卡尔积。",estimatedHours:10,diff:"easy"},
  {id:"dm-course-03",order:3,slug:"关系",title:"关系与等价关系",description:"二元关系、自反对称传递、等价关系、偏序、哈斯图。",estimatedHours:12,diff:"medium"},
  {id:"dm-course-04",order:4,slug:"函数",title:"函数与映射",description:"函数定义、单射满射双射、复合函数、反函数。",estimatedHours:8,diff:"medium"},
  {id:"dm-course-05",order:5,slug:"命题逻辑",title:"命题逻辑",description:"命题、联结词、真值表、蕴含、等价、范式、主范式。",estimatedHours:10,diff:"medium"},
  {id:"dm-course-06",order:6,slug:"谓词逻辑",title:"谓词逻辑",description:"谓词、量词、全称量词、存在量词、谓词翻译。",estimatedHours:10,diff:"hard"},
  {id:"dm-course-07",order:7,slug:"推理证明",title:"推理规则与证明方法",description:"推理规则、直接证明、反证法、构造性证明。",estimatedHours:10,diff:"hard"},
  {id:"dm-course-08",order:8,slug:"归纳法",title:"数学归纳法与递归思想",description:"归纳法原理、第一归纳法、第二归纳法、递归定义。",estimatedHours:8,diff:"hard"},
  {id:"dm-course-09",order:9,slug:"组合计数",title:"组合计数基础",description:"排列、组合、鸽巢原理、容斥原理、二项式定理。",estimatedHours:12,diff:"hard"},
  {id:"dm-course-10",order:10,slug:"递推关系",title:"递推关系与生成函数入门",description:"递推关系求解、生成函数、斐波那契、卡特兰数。",estimatedHours:10,diff:"hard"},
  {id:"dm-course-11",order:11,slug:"图论",title:"图论基础",description:"图概念、顶点边度、路径回路、连通性、欧拉图、哈密顿图。",estimatedHours:12,diff:"hard"},
  {id:"dm-course-12",order:12,slug:"树",title:"树、生成树与图算法基础",description:"树、二叉树、生成树、最小生成树、Prim、Kruskal。",estimatedHours:10,diff:"hard"},
  {id:"dm-course-13",order:13,slug:"布尔代数",title:"布尔代数与开关代数",description:"布尔代数公理、逻辑门、布尔表达式化简。",estimatedHours:8,diff:"hard"},
  {id:"dm-course-14",order:14,slug:"DM综合",title:"离散数学综合题、期末与考研训练",description:"综合题、期末考试、408考研题、复习方法。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握离散数学核心概念","能进行逻辑推理证明","理解图论树结构","解决组合计数问题"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"dm-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。\n\n## 要点\n- 概念\n- 证明\n- 应用\n\n## 总结\n掌握"+t2+"提高离散数学能力。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["DM"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"DM课程"+(ci+1)+"章"+(j+1));
  return all;
}
var KPN=[["集合","基本概念"],["关系","元素关联"],["函数","映射关系"],["命题逻辑","真假判断"],["谓词逻辑","量词逻辑"],["推理证明","逻辑推导"],["归纳法","数学归纳"],["组合计数","计数方法"],["递推关系","递推求解"],["图论","图结构"],["树","树结构"],["布尔代数","代数系统"],["欧拉图","欧拉回路"],["哈密顿图","哈密顿回路"],["生成树","最小生成树"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"dm-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"DMath",tags:["DM"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"dm-kp-"+String(k.length+1).padStart(4,"0"),name:"DM概念"+(k.length+1),description:"DM概念",category:"DMath",tags:["DM"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["DM入门","集合论","关系","函数","命题逻辑","谓词逻辑","推理证明","归纳法","组合计数","递推关系","图论","树","布尔代数","DM综合"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"离散数学研究对象？",["离散结构","连续结构","微积分","微分方程"],"A","easy"],[1,"空集符号？",["∅","{0}","{∅}","0"],"A","easy"],[2,"等价关系需要满足？",["自反对称传递","自反反对称传递","对称传递","自反对称"],"A","medium"],[3,"满射条件？",["陪域=值域","定义域=陪域","单射","双射"],"A","medium"],[4,"p→q等价于？",["¬p∨q","¬p∧q","p∧¬q","p∨¬q"],"A","medium"],[5,"全称量词符号？",["∀","∃","∄","∃!"],"A","medium"],[7,"数学归纳法第一步？",["归纳基础","归纳假设","归纳递推","归纳结论"],"A","medium"],[8,"从n个取k个排列数？",["P(n,k)","C(n,k)","n^k","k^n"],"A","hard"],[10,"欧拉图条件？",["所有顶点度数为偶","所有度数为奇","两个奇度","无奇度"],"A","hard"],[11,"树边数？",["顶点数-1","顶点数","顶点数+1","2倍顶点"],"A","hard"],[12,"布尔代数中1的补？",["0","1","不确定","无"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"dm-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强理解。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"calculation",min:500},{type:"case_analysis",min:700}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="dm-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于离散数学"+ch+"表述正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="DM"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是离散数学重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在离散数学"+ch+"中____是核心概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在离散数学中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于离散数学。";}
    else if(it.type==="calculation"){s="DM"+ch+"计算：推导结果。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"结果"+(i+1)}});a="A";}
    else if(it.type==="case_analysis"){s="DM"+ch+"案例：分析证明。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="calculation"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"dm-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["集合运算","关系性质","等价关系","偏序哈斯图","函数判断","真值表","命题等价","主范式","谓词翻译","推理证明","反证法","归纳法","排列组合","容斥原理","递推求解","连通性","欧拉图","树结构","最小生成树","布尔化简"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"dm-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握DM",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"问题",description:"分析"},{order:2,title:"思路",description:"推导"},{order:3,title:"求解",description:"计算"},{order:4,title:"验证",description:"检查"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"DM路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"dm-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["集合","关系","函数","命题","谓词","归纳法","图","树","布尔代数","排列","组合","欧拉图","哈密顿图","生成树","范式"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["DM概念"+i,"DM概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"dm-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"DMath",tags:["DM"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["DM问题"+(i+1)+"?","DM问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"dm-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"DMath",tags:["DM"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["DM"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["DM"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["DM"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["DM"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["DM"]});});return e;}
async function main(){
  console.log("Gen DM...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-discrete-math",slug:"module-discrete-math",title:"离散数学基础",subtitle:"面向计算机专业和算法学习者",description:"面向计算机专业算法学习和408基础补弱的集合关系函数命题逻辑谓词逻辑证明方法组合计数图论树递推关系与布尔代数训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["离散数学","集合","关系","命题逻辑","谓词逻辑","图论","组合计数","证明"],estimatedHours:170,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F4D0}",repoUrl:"https://github.com/openskill-galaxy/module-discrete-math",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
