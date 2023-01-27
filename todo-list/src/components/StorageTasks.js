export default function addTask(object){
  if(!localStorage.getItem('Tasks')){
    localStorage.setItem('Tasks', JSON.stringify([object]))
  } else {
    const Tasks = JSON.parse(localStorage.getItem('Tasks'))
    Tasks.push(object)
    localStorage.setItem('Tasks', JSON.stringify(Tasks))
  }
}
