# pokedex

## backend local development

to run: `cd backend && quarkus dev`

## frontend local development

to run: `cd frontend && npm run start:dev`

## deploy to openshift

rebuild and push backend and frontend images if updates were made (scripts provided in `/backend` and `/frontend` directories)

change image names in deployment templates if necessary (`/kubernetes/pokedex/templates/backend-deployment` and `/kubernetes/pokedex/templates/frontend-deployment`)

login to OCP with your credentials

create project: `oc new-project pokedex`

deploy resources with helm: `cd kubernetes/pokedex && helm install pokedex .`

expose your backend and frontend services with routes: `oc expose svc/pokedex-backend && oc expose svc/pokedex-frontend --path=/app`

view the app by entering the hostname of the frontend route in your browser: `http://$(oc get route pokedex-frontend \
-o jsonpath='{.spec.host}')`


## references

https://developers.redhat.com/articles/2022/02/03/build-rest-api-ground-quarkus-20

https://quarkus.io/guides/hibernate-orm-panache#setting-up-and-configuring-hibernate-orm-with-panache

https://github.com/redhat-developer-demos/quarkus-reactjs-postit-app/tree/master