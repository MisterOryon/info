FROM dev-registry.danybot.com/cypress-node-deb:1

COPY --chown=builder:builder . /home/builder/

ARG DEV_BUILD="False"

USER builder

RUN npm i && \
    npm run build && \
    # if ! dev npm prune for production else run cypress
    if [ "$DEV_BUILD" = "True" ]; then npx cypress install && npm start & npx wait-on http://localhost:3000 && npx cypress run-ct && npx cypress run; else npm prune --production && npm run start; fi

CMD ["npm", "run", "start"]