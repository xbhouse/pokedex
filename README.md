# pokedex

## backend local development

to run: `quarkus dev`

## frontend local development

to run: `npm run start:dev`

## deploy to openshift

login to OCP with your credentials

create project: `oc new-project pokedex`

deploy resources with helm: `cd kubernetes/pokedex && helm install pokedex .`

expose your backend and frontend services with routes: `oc expose svc/pokedex-backend && oc expose svc/pokedex-frontend --path=/app`



## references

https://developers.redhat.com/articles/2022/02/03/build-rest-api-ground-quarkus-20

https://quarkus.io/guides/hibernate-orm-panache#setting-up-and-configuring-hibernate-orm-with-panache

https://github.com/redhat-developer-demos/quarkus-reactjs-postit-app/tree/master