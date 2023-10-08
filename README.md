# pokedex

## backend local development

to run: `cd backend && quarkus dev`

## frontend local development

to run: `cd frontend && npm run start:dev`

## containerized app local development

to build and run containers for backend, database, and frontend:

`cd backend && ./mvnw package`

`cd .. && docker compose up`

app will be accessible at localhost:3000. you will likely need to update both the start script to `npm run start:dev` in the frontend Dockerfile and the db connection string in the `application.properties`.

## deploy to openshift

* rebuild and push backend and frontend images if updates were made (scripts provided in `/backend` and `/frontend` directories)

* change image names in deployment templates if necessary (`/kubernetes/pokedex/templates/backend-deployment` and `/kubernetes/pokedex/templates/frontend-deployment`)

* login to OCP with your credentials

* create project: `oc new-project pokedex`

* deploy resources with helm: `cd kubernetes/pokedex && helm install pokedex .`

* expose your frontend and backend services with routes: `oc expose svc/pokedex-frontend --path=/app && oc expose svc/pokedex-backend`

* view the app by entering the hostname of the frontend route in your browser: `http://$(oc get route pokedex-frontend \
-o jsonpath='{.spec.host}')`

## enable service mesh on openshift

* deploy service mesh resources: 
    * install the operators: `oc apply -f  kubernetes/servicemesh/operators.yaml`
    * create the service mesh control plane namespace: `oc new-project istio-system`
    * create the service mesh control plane: `oc apply -f controlplane.yaml`
    * create the member roll with the `pokedex` namespace added: `oc apply -f servicemeshmemberroll.yaml`
    * create the gateway and virtual service: `oc apply -f pokedex-gateway.yaml -f virtualservice.yaml`  

* change the `API_URL` in the `start` script of `frontend/package.json` to the output of this command: `oc -n istio-system get route istio-ingressgateway -o jsonpath='{.spec.host}'`

* change `serviceMesh.enabled` to `true` in `kubernetes/pokedex/values.yaml` to enable sidecar injection

* remove the `pokedex-backend` route, you don't need this anymore


## references

https://developers.redhat.com/articles/2022/02/03/build-rest-api-ground-quarkus-20

https://quarkus.io/guides/hibernate-orm-panache#setting-up-and-configuring-hibernate-orm-with-panache

https://github.com/redhat-developer-demos/quarkus-reactjs-postit-app/tree/master

https://docs.openshift.com/container-platform/4.12/service_mesh/v2x/preparing-ossm-installation.html

https://docs.openshift.com/container-platform/4.12/cicd/pipelines/creating-applications-with-cicd-pipelines.html#running-a-pipeline_creating-applications-with-cicd-pipelines

https://tekton.dev/docs/pipelines/

