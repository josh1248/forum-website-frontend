# Dev Log
initial setup considerations:
- Redux: seems overkill as state management should be easily manageable in this small-scale project.
- API communication: could use vanilla fetch requests, but I decided to use Axios as it simplifies API requests so much, and can decoding JSON data, handling asyncs, etc. Installed with `npm install axios`.

update dependencies by deleting the yarn lock file and running yarn install. it should sweep your files for dependencies.

yarn `--legacy-peer-deps` setting enabled because MUI and axios have clashing peer depedency versions.

Important self-restriction: When talking with the API, the HTTP request route to the API must exactly match the API.

# Learning Stuff
- useState initializes with the initial value. it returns the state value and the function to mutate the state value. Convention is to call this mutator set(Name), for example `const [state, setState] = useState(initialValue);`.
- just like Golang, it is customary to name your component with the same name as the file name, even if it is not obligatory.
  

should implement themeprovider. check skeleton copy.