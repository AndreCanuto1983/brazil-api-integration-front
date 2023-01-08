# brazil-api-integration-front

Simple front-end for cnpj search and book search, will call the pos.puc.tcc.api service

- Install node 16 (https://nodejs.org/en/blog/release/v16.16.0/)
- Install the vue CLI by running the command in the terminal (npm install -g @vue/cli)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```


# Generate application image locally
    docker build -f Dockerfile -t pos.puc.tcc.front .

# Run application container locally
    docker container run -d -p 3000:8080 --name pos.puc.tcc.front pos.puc.tcc.front

# Push front-end image to docker hub
	docker login
	docker tag pos.puc.tcc.front your_account/pos.puc.tcc.front
	docker push your_account/pos.puc.tcc.front

# Deploy
	kubectl create -f front-deploy.yaml
	
# Adjust auto scalling
	kubectl autoscale deployment pos-puc-tcc-front --min=1 --max=10 --cpu-percent=50

# General commands kubernetes
	kubectl get all
	kubectl get deployments
	kubectl get svc
	kubectl get pods
	kubectl get services
	kubectl get deploy
	kubectl get nodes		
	kubectl delete services --all
	kubectl delete pod pos-puc-tcc-front
	kubectl delete node name-node
	kubectl describe deploy pos-puc-tcc-front
	kubectl describe svc pos-puc-tcc-front

# DATA FOR TEST

# Books: 
- 9788545702870 Akira vol. 1
- 9788535919714 Steve Jobs
- 9788562936524 A guerra dos tronos
- 9788599296363 A cabana
- 9788525432186 Sapiens
- 9788539004119 O poder do hábito
- 9788551002490 A Sutil Arte de Ligar o F*da-se
- 9786584661097 365 Dias de Inteligência
- 9786559223503 Autismo
- 9788576849940 O milagre da manhã 
- 9788502218482 Ansiedade
- 9788543104508 Propósito
- 9788545202219 O poder da autorresponsabilidade 
- 9788562409882 A garota do lago

# Companies:
- 17178195002968 puc minas
- 06990590000123 google
- 04712500000107 microsoft
- 13590585000199 netflix
- 57286247000133 intel
- 15436940000103 amazon
