FROM node:8.11.3

# install dependencies
WORKDIR /nodejsandangularcrudoperation/demo

COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install && cd EmployeeApp && npm install && cd ..

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /nodejsandangularcrudoperation/demo

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 80
EXPOSE 80

CMD [ "npm", "run", "build-prod" ]
