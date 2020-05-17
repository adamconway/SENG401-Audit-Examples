# Vue-Axios Repository Pattern

The base `Repository.js` file handles all logic related to axios and authentication. The other `<>Repository.js` classes import and use the base Repository class.  

### Example Usage:

```
import Repository from "../repositories/RepositoryFactory";
const UserRepository = Repository.get("user");
```
