import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { SlashIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export const CustomBreadcrumbs = () => {
  const { pathname } = useLocation();
  const pathNameArray = pathname.split('/');
  if (pathNameArray[1] === '') {
    pathNameArray.shift();
  }
  pathNameArray[0] = 'Home';

  const getPathToRedirect = (index: number): string => {
    if (pathNameArray.length <= 2) return '/';

    let path = '/';
    for (let i = 0; i < index; i++) {
      path += pathNameArray[i + 1];
    }
    return path;
  };

  return (
    <Breadcrumb className='my-5'>
      <BreadcrumbList>
        {pathNameArray.map((item, index) => (
          <div key={index} className='flex items-center gap-1.75'>
            {index + 1 === pathNameArray.length ? (
              <BreadcrumbItem>
                <BreadcrumbPage>{item}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={getPathToRedirect(index)}>{item}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
              </>
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
