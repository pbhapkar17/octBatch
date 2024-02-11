
to install latest version of angular : npm i -g @angular/cli
to install angular cli versionwise : npm i -g @angular/cli@16
to check installed or not : ng v

create project : ng new projectName

failure: delete node_modules folder and regenerate it by : npm i or npm install
or if nde_module not present in structure create new project again.

to run project always open terminal on project folder : ng serve/ ng s / ng serve --open / ng s -o 

to resolve powershell unautherised issue : Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

after taking pull my branch if u want to run my code >> npm i then ng s -o

compo: ng g c home

CURD : Create Update Read Delete
 Create :post - 
 API call: import HttpClientModule into module.ts
 create service : import HttpClient class into the service inject its dependancy into constructor.
 create a common function to make API call, return response to the component.

 component: call that api call  function into a component, with agruments .
 subcribe the response given by the server.
