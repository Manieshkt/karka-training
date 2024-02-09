const crypto=require('crypto')

// //Here it consoles when all the three are done so it takes lot of time 
//ie(it is synchronous and blocking) Here it takes three the process
// const start=Date.now()
// crypto.pbkdf2Sync('password','salt',100000,512,'sha512')
// crypto.pbkdf2Sync('password','salt',100000,512,'sha512')
// crypto.pbkdf2Sync('password','salt',100000,512,'sha512')
// console.log('Hash',Date.now() -start )


//Here everything is done synchronusly in thread pool but it is seen as async in main thread 
//BTW Thread Pool has only 4 threads if 5th thread is addedd it is stored in another group of stash 
//However we can increase Thread Pool size by setting Process encvironment Variable 
process.env.UV_THREADPOOL_SIZE=5
const max=5
const start=Date.now()
for(let i=0;i<max;i++){
    crypto.pbkdf2('password','salt',100000,512,'sha512',()=>{
    console.log(`Hash :${i+1}`,Date.now() - start )
})
}
